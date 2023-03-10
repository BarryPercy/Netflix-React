import MyNav from './MyNav';
import MovieInfo from './MovieInfo'
import Footer from './Footer'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import { Container, Row, Col} from 'react-bootstrap'

function App(props) {
  const params = useParams()
  const [currentMovie,setCurrentMovie] = useState(null);
  const [fetched, setFetched] = useState(false);

  const fetchMovie = async () => {
    try {
        let res = await fetch(`http://www.omdbapi.com/?apikey=2baf1f0e&i=${params.movieId}`)
        if(res.ok){
            let data = await res.json();
            console.log(data);
            setCurrentMovie(data);
            setFetched(true);
        }
        else{       
        }
    }catch(error){
        console.log(error);
    }
  }

  useEffect(()=>{
    fetchMovie()
  },[])
  
  
  console.log()
  return (
    <>
        <MyNav></MyNav>
        <Container>
          <Row>
            <Col>
              {fetched && <MovieInfo movie={currentMovie}/>} 
            </Col>
          </Row>
        </Container>
         
    </>
  );
}

export default App;
