import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'

import {connect} from 'react-redux'

class Display extends Component {
    render() {
        return (
            <Container fluid>
                <Col>
                    <Row>
                        <div>{this.props.operation}</div>
                    </Row>
                    <Row>
                        <p>{this.props.display}</p>
                    </Row>
                </Col>
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return {
        display: state.display,
        operation: state.operation,
        result: state.result,
        operator: state.operator,
        operand: state.operand
    }
}

export default connect(mapStateToProps)(Display)