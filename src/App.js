import {useState, useEffect} from 'react';
import './App.css';
import MovieCard from './component/moviecard';


const API_URL = "http://www.omdbapi.com?apikey=b4deeba8";

const App= () =>{

  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();

      setMovies(data.Search);
  }

 

  useEffect(() => {
      searchMovies('Superman');
  }, []);


  return (
    <div className='app'>
        <h1>WatchLand</h1>

        <div className='search'>
           <input placeholder='Search for movies'
           value={searchTerm}
           onChange={ (e) => setSearchTerm(e.target.value) }
           />
           <img 
           src="search.svg"
           alt="search"
           onClick={() => searchMovies(searchTerm)}
           />
        </div>

          {
            movies?.lenght > 0
            ?
            (

              
              <div className='empty'>
                <h2>No Movies Found</h2>
              </div>

            ) : (

              <div className='container'>
                  {movies.map((movie) => (
                    <MovieCard movie={movie}/>
                  ))}
              </div>

            )

          }


         
    </div>
  );
}

export default App;
