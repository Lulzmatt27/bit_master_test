import React from 'react';
import {Container} from 'react-bootstrap'
import Header from './components/Header'
import FormOrderTaxi from './screens/FormOrderTaxi'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container>
          <FormOrderTaxi />
        </Container>
      </main>
    </div>
  );
}

export default App;
