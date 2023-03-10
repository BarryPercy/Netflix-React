import Image from 'react-bootstrap/Image'

function movieInfo(props) {
  return (
    <>
        <h2>{props.movie.Title}</h2>
        <Image src={props.movie.Poster}/>
        <p>Genre(s):{props.movie.Genre}</p>
        <p>Release Year:{props.movie.Year}</p>
        <p>Starring: {props.movie.Actors}</p>
        <p><i>{props.movie.Plot}</i></p>
    </>
  );
}

export default movieInfo;
