import {Container, Row, Col} from 'react-bootstrap'

function Buttons() {
    return (
        <Container fluid>
            <Row>
                <Col>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                </Col>
            </Row>

            <Row>
                <Col>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                </Col>
            </Row>

            <Row>
                <Col>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>*</button>
                </Col>
            </Row>

            <Row>
                <Col>
                <button>.</button>
                <button>0</button>
                <button>=</button>
                <button>/</button>
                </Col>
            </Row>
        </Container>

    )
}

export default Buttons