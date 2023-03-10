import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import TvShows from './components/TvShows'
import MovieDetails from './components/MovieDetails'
import Home from './components/Home'
import NotFound from './components/NotFound'
import BackEnd from './backend/BackEnd'
import MyNav from './components/MyNav';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
      <MyNav/>
     	 <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/tv-shows" element={<TvShows />} />
         <Route path="/movie-details/:movieId" element={<MovieDetails />} />
         <Route path="*" element={<NotFound />} />
         <Route path="/backend" element={<BackEnd/>}/>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
