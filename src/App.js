import React, { Component } from 'react'
import './App.css';
import {Container, Col, Row} from 'react-bootstrap'
import Display from './components/Display'
import Buttons from './components/Buttons'

class App extends Component {

  render() {
    return (
        <Container className="calculator py-2" fluid>
          <Row>
            <Col>
              <Display />
              <Buttons />
            </Col>
          </Row>
        </Container>
    )
  }
}

export default App;
