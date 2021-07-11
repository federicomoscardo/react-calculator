import React, { Component } from 'react'
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Display from './components/Display'
import Buttons from './components/Buttons'
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Container fluid>
  
          <Display />
  
          <Buttons />
          
        </Container>
      </div>
    )
  }
}

export default App;
