import './App.css';
import Row from './Row';
import requests from './requests';
import Banner from './Banner';

function App() {
  return (
    <div className="App">
      {/* Nav */}
      <Banner/>
      {/* Header */}
      <Row title ="NETFLIX ORIGINALS" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title ="Trending Now" fetchUrl={requests.fetchTrending}/>
      <Row title ="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Row title ="Action Movies" fetchUrl={requests.fetchActionMovies}/>
      <Row title ="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Row title ="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
      <Row title ="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Row title ="Documentry Movies" fetchUrl={requests.fetchDocumentryMovies}/>
    </div>
  );
}

export default App;
