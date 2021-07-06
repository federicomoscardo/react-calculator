import logo from './logo.svg';
import './App.css';
import {Container, Row, Col} from 'react-bootstrap'
import Result from './Result'
import Buttons from './Buttons'

function App() {
  return (
    <div className="App">
      <Container fluid>

        <Result></Result>

        <Buttons></Buttons>
        
          
      </Container>
    </div>
  );
}

export default App;
