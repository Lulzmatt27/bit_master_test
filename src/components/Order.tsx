import React from 'react'
import {InputGroup,Card,Badge,Row} from 'react-bootstrap'
const Order = () => {
  return (
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Подходящий экипаж</InputGroup.Text>
      </InputGroup.Prepend>
      <Card>
        <Card.Body>
          <Row>
            <span>Модель машины</span>
          </Row>
          <Row>
            <span>цвет</span>
          </Row>
          <Row>
            <Badge>номер машины</Badge>
          </Row>
        </Card.Body>
      </Card>
    </InputGroup>
  )
}

export default Order
