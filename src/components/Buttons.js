import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import Button from './Button'

class Buttons extends Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col>
                        <Button text="7" type="number" />
                        <Button text="8" type="number" />
                        <Button text="9" type="number" />
                        <Button text="+" type="operator" />
                    </Col>
                </Row>
    
                <Row>
                    <Col>
                        <Button text="4" type="number" />
                        <Button text="5" type="number" />
                        <Button text="6" type="number" />
                        <Button text="-" type="operator" />
                    </Col>
                </Row>
    
                <Row>
                    <Col>
                        <Button text="1" type="number" />
                        <Button text="2" type="number" />
                        <Button text="3" type="number" />
                        <Button text="*" type="operator" />
                    </Col>
                </Row>
    
                <Row>
                    <Col>
                        <Button text="." type="dot" />
                        <Button text="0" type="number" />
                        <Button text="=" type="operator" />
                        <Button text="/" type="operator" />
                    </Col>
                </Row>
            </Container>
    
        )
    }
}

export default Buttons