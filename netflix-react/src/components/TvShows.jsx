import MyNav from './MyNav';
import TvSection from './TvSection'
import Footer from './Footer'

function App() {
  return (
    <>
      <MyNav searchtext="Search in TV Shows..."></MyNav>
      <TvSection franchise="Star Wars"/>
      <TvSection franchise="Star Trek"/>
      <TvSection franchise="Police Academy"/>
      <Footer/>
    </>
  );
}

export default App;
