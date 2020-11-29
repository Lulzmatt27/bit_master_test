import React,{useRef} from 'react'
import {InputGroup,FormControl} from 'react-bootstrap'
const Address = () => {
  const addressRef = useRef(null);

  return (
    <InputGroup className='my-3'>
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Откуда</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        placeholder="Адрес"
        aria-label="address"
        aria-describedby="basic-addon1"
        ref={addressRef}
      />
    </InputGroup>
  )
}

export default Address
