import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css';
import Button from './Button'

class Buttons extends Component {
    render() {
        return (
            <Container fluid>

                <Row className="my-2">
                    <Col className="p-0">
                        <Button text="Clear" type="clear" />
                    </Col>
                </Row>

                <Row className="my-2">
                    <Col className="p-0">
                        <Button text="7" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="8" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="9" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="+" type="operator" />     
                    </Col>
                </Row>
    
                <Row className="my-2">
                    <Col className="p-0">
                        <Button text="4" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="5" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="6" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="-" type="operator" />
                    </Col>

                </Row>
    
                <Row className="my-2">
                    <Col className="p-0">
                        <Button text="1" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="2" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="3" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="*" type="operator" />
                    </Col>
                </Row>
    
                <Row className="my-2">
                    <Col className="p-0">
                        <Button text="." type="dot" />
                    </Col>
                    <Col className="p-0">
                        <Button text="0" type="number" />
                    </Col>
                    <Col className="p-0">
                        <Button text="=" type="operator" />
                    </Col>
                    <Col className="p-0">
                        <Button text="/" type="operator" />
                    </Col>
                </Row>
            </Container>
    
        )
    }
}

export default Buttons