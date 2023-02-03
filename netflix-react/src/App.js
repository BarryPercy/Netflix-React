import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import './App.css';
import MyNav from './components/MyNav';
import MovieSection from './components/MovieSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MovieSection franchise="Harry Potter"/>
      <MovieSection franchise="Lord of the Rings"/>
      <MovieSection franchise="Avengers"/>
      <Footer/>
    </>
  );
}

export default App;
