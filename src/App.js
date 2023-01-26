import List from './List.js' 
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Header from './Header.js';
import {Container, Row, Col} from 'reactstrap';

function App() {
  return (
    <div className="App">
        <Header color="dark" dark="true" className="mb-4"/>
        <Container>
          <Row>
            <Col>
              <List />
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default App;
