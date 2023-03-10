import { Container, Row, Col} from 'react-bootstrap'

function App() {
  return (
    <>
      <Container>
        <Row>
            <Col xs={12}>
                <h1 className="not-found">404 Page Not Found</h1>
            </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
