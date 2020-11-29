import React from 'react'
import {Navbar} from 'react-bootstrap'
const Header = () => {
  return (
    <header>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Детали заказа</Navbar.Brand>
      </Navbar>
    </header>
  )
}

export default Header
