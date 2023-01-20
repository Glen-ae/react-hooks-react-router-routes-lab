import Movies from "./Movies"
import { movies } from "../data";
import Movie from "./Movie"


function Movies() {
  const moviesList=movies.map(movie =>
     <Movie movie={movie} key={movie.title}/>)
  
     
  return(
   <div>
    <h1>Movies Page</h1>
    {moviesList}
  </div>
  );
}

export default Movies;
