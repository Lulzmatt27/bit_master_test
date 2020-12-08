import React,{useRef,useState} from 'react'
import {Row,Col,Button,InputGroup,FormControl,Form} from 'react-bootstrap'
import {YMaps,Map,Placemark} from 'react-yandex-maps'
import {useDispatch,useSelector} from 'react-redux'
import {searchCrew} from '../actions/crewActions'
import {createOrder} from '../actions/orderActions'
import Order from '../components/Order'
import Error from '../components/Error'
import ListCars from '../components/ListCars'
import Loader from '../components/Loader'
import type * as Types from '../Types'

interface ISelector {
  [key: string]: any
}
const FormOrderTaxi = () => {

  const dispatch = useDispatch()
  const order = useSelector((state: ISelector) => state.order);
  const crew = useSelector((state: ISelector) => state.crew);

  const [ymaps,setYmaps] = useState<any>('')
  const [mapCoord,setMapCoord] = useState<number[]>([54.7348,55.9579])
  const [markerCoord,setMarkerCoord] = useState<number[]>([54.7348,55.9579])
  const [typingTimeout,setTypingTimeout] = useState<any>(0);
  const [invalidAddress,setInvalidAddress] = useState(false);
  const addressInput = useRef<any>(null)

  const onYMapLoad = (value: any) => {
    setYmaps(value)
  }

  const getCoord = async (address: string) => {
    try {
      const result = await ymaps.geocode(address)
      const coord = result.geoObjects.get(0).geometry.getCoordinates();
      setMarkerCoord(coord)
      setMapCoord(coord)
      dispatch(searchCrew(address,coord[0],coord[1]))
      if(invalidAddress) {
        setInvalidAddress(false);
      }
    }
    catch(error) {
      setInvalidAddress(true);
    }
  }

  const placeMarkChangePosition = (e: any) => {
    setMarkerCoord(e.get("coords"))
    ymaps.geocode(e.get("coords")).then(function(res: any) {
      const firstGeoObject = res.geoObjects.get(0);
      const address = firstGeoObject.getAddressLine().split(',').slice(-2);
      addressInput.current.value = address.join(',')
      getCoord(addressInput.current.value)
    });
  }
  // простая проверка без regexp
  const validateAddressLength = () => {
    const address = addressInput.current?.value.split(',');
    if(address?.length) {
      return address.length === 2 && address[1] > 0
    }
    return false;
  }

  const changeAddressHandler = () => {
    if(typingTimeout) {
      clearTimeout(typingTimeout)
    }
    setTypingTimeout(() => {
      return setTimeout(() => {
        if(validateAddressLength()) {
          getCoord(addressInput.current.value)
        }
      },2000)
    })
  }

  const orderTaxi = (e: React.SyntheticEvent) => {
    e.preventDefault();
    dispatch(createOrder())
  }

  const {crewInfo,loading} = crew;
  const addressIsValid = validateAddressLength();

  return (
    <div>
      <Form onSubmit={orderTaxi}>
        <Row>
          <Col md='8'>
            <InputGroup className='my-3'>
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Откуда</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Адрес, дом"
                aria-label="address"
                aria-describedby="basic-addon1"
                ref={addressInput}
                onChange={changeAddressHandler}
                required
              />
            </InputGroup>
            {invalidAddress && <Error><span>Адрес не найден. Введите корректный адрес</span></Error>}
          </Col>
        </Row>
        <Row className='my-2'>
          <Col md='8'>
            <Order car={crewInfo?.data?.crews_info[0]} suitableScrew={crewInfo?.data?.crews_info} />
          </Col>
        </Row>
        <Row className='my-2 middle-menu'>
          <Col className='my-2' md='8'>
            <YMaps query={{apikey: 'fea49649-ef41-4d29-9134-57092fd452c8',load: 'control.ZoomControl'}} >
              <Map state={{center: mapCoord,zoom: 15}} defaultState={{center: [54.7348,55.9579],zoom: 17}}
                width="100%" height="100%" onLoad={onYMapLoad} modules={['geocode']} onClick={placeMarkChangePosition}>
                <Placemark defaultGeometry={[54.7348,55.9579]} options={{iconColor: '#FFCC00'}} geometry={markerCoord} />
                {crewInfo?.data?.crews_info.map((crew: Types.Crew) => (<Placemark key={crew.crew_id} options={{iconColor: '#00FF00'}} geometry={[crew.lat,crew.lon]} />))}
              </Map>
            </YMaps>
          </Col>
          <Col className='my-2' md='4'>
            {loading ? <Loader /> : (
              <ListCars cars={crewInfo?.data?.crews_info} />
            )}
          </Col>
        </Row>
        <Row className='my-2'>
          <Button variant='primary' type='submit' block disabled={order?.loading || invalidAddress || !addressIsValid} >Заказать</Button>
        </Row>
        <Row className='my-2 order-info'>
          {(order?.orderInfo?.code === 0) ? <span className='order-info__order-success'>Заказ успешно создан с id {order.orderInfo.data.order_id}</span> : null}
        </Row>
      </Form>
    </div>
  )
}

export default FormOrderTaxi
