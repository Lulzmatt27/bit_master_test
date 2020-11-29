import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {YMaps,Map,Placemark} from 'react-yandex-maps'
const OrderMap = () => {
  const onYMapLoad = (ymaps: any) => {
    console.log('ymaps',ymaps);
  }
  return (
    <YMaps>
      <Map defaultState={{center: [54.7348,55.9579],zoom: 15}}
        width="100%" height="100%" onLoad={onYMapLoad} query={{
          apikey: ''
        }}>
        <Placemark defaultGeometry={[54.7348,55.9579]} options={{iconColor: '#FFCC00'}} />
      </Map>
    </YMaps>
  )
}

export default OrderMap
