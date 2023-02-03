import {Container, Row} from 'react-bootstrap'
import Carousel from './Carousel'
function MyNav(props) {
    return (
            <Container className="franchise-containers"fluid>
                <h2>{props.franchise}</h2>
                <Row className='no-wrap'>
                    <Carousel franchise={props.franchise}/>
                </Row>
            </Container>

);
}

export default MyNav;