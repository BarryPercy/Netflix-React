import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
     	 <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/tv-shows" element={<TvShows />} />
         <Route path="/movie-details/:movieId" element={<MovieDetails />} />
         <Route path="*" element={<NotFound />} />
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
