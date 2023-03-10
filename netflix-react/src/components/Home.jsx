import MyNav from './MyNav';
import MovieSection from './MovieSection'
import Footer from './Footer'

function App() {
  return (
    <>
      <MyNav></MyNav>
      <MovieSection franchise="Harry Potter"/>
      <MovieSection franchise="Lord of the Rings"/>
      <MovieSection franchise="Marvel"/>
      <Footer/>
    </>
  );
}

export default App;
