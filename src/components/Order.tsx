import React from 'react'
import {getColorByName} from '../utils'
import {InputGroup,Card,Badge,Row,Col} from 'react-bootstrap'
const Order: React.FC<{car: any,suitableScrew: boolean}> = ({car,suitableScrew}) => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Подходящий экипаж</InputGroup.Text>
      </InputGroup.Prepend>
      <Col md='8'>
        <Card>
          <Card.Body >
            <Row>
              <span>{suitableScrew ? `${car.car_mark} ${car.car_model}` : '---'}</span>
            </Row>
            <Row>
              {suitableScrew ? (<span style={{
                color: getColorByName(car.car_color)
              }}>{car.car_color}</span>) : ''}
            </Row>
            <Row>
              {suitableScrew ? <Badge pill variant='secondary'>{car.car_number}</Badge>
                : '---'}
            </Row>
          </Card.Body>
        </Card>
      </Col>
    </InputGroup>
  )
}

export default Order
