import {Component} from 'react'
import {Spinner, Alert} from 'react-bootstrap';
import MovieCard from './MovieCard'
import { Link, useLocation, useNavigate } from 'react-router-dom'

class Carousel extends Component{
    state={
        movies:[],
        isLoading:true,
        isError:false,
    }
    fetchMovies = async () => {
        try {
            let res = await fetch(`http://www.omdbapi.com/?apikey=2baf1f0e&s=${this.props.franchise}/`)
            if(res.ok){
                let data = await res.json();
                console.log(data)
                this.setState({
                    movies:data.Search,
                    isLoading:false,
                })
            }
            else{   
                this.setState({
                    isLoading:false,
                    isError:true,
                })        
            }
        }catch(error){
            console.log(error);
            this.setState({
                isLoading:false,
                isError:true,
            })  
        }
    }
    componentDidMount(){
        this.fetchMovies();
    }
    render(){
        // <></>
        return(
            this.state.movies.map((movie)=>{
                return(
                    <>
                    {this.state.isLoading && (
                        <Spinner animation="border" variant="success" />
                    )}
                    {this.state.isError && (
                        <Alert variant="danger">Aww snap, we got an error!😨</Alert>
                    )}
                    <Link to={'/movie-details/'+movie.imdbID}><MovieCard key={movie.imdbID} movie={movie}/></Link>
                    </>
                )
            })
        )
    }
}

export default Carousel;