
import './App.css';
import MovieList from './component/MovieList';
import Filter from './component/Filter';
import Add from './component/Add';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './List';
import {  useState } from 'react';


function App() {
  const addMovie = (newMovie) => {
    console.log(newMovie)
    setMovies([...movies, newMovie])
  }

  const [movies, setMovies] = useState(List)
const [title , setTitle] = useState("")
const [rating , setRating] = useState(0)


  return (
    <div className="App">
      <Filter setRating={setRating} setTitle={setTitle} />
    <MovieList List={movies} title={title} rating={rating}/>
    
    <Add addMovie={addMovie}/>
    </div>
  );
}

export default App;
//The user should be:
// Able to add a new movie.
// Filter the movies with title/rating.

