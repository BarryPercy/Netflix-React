import {Component} from 'react'
import Image from 'react-bootstrap/Image'

class MovieCard extends Component{
    render(){
        return(
            <>
                <Image className='movie-card' src={this.props.movie.Poster}/>
            </>
        )
    }
}

export default MovieCard;