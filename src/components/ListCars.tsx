import React from 'react'
import {ListGroup,Row,Col} from 'react-bootstrap';
import {getColorByName} from '../utils';
import {List} from 'react-bootstrap/lib/Media';
const ListCars: React.FC<{cars: any[]}> = ({cars}) => {
  console.log('cars',cars)
  return (
    <ListGroup>
      {cars ? cars.map(car => (
        <ListGroup.Item key={car.crew_id}>
          <Row>
            <Col md='12'>{car.car_mark}&nbsp;{car.car_model}</Col>
            <Col md='4' className='my-2'>
              <span style={{color: getColorByName(car.car_color)}}>{car.car_color}</span>
            </Col>
            <Col md='8'>
              <div style={{textAlign: 'end'}}>{car.distance}&nbsp;м</div>
            </Col>
          </Row>
        </ListGroup.Item>
      )) : <ListGroup.Item>
        </ListGroup.Item>}
    </ListGroup>
  )
}

export default ListCars
