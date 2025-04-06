import './MovieList.scss';
import movies from '../../api/movies.json';
import { MovieCard } from '../MovieCard';

export const MovieList = () => (
  <>
    {movies.map(movie => {
      return <MovieCard key={movie.imdbId} movie={movie} />;
    })}
  </>
);
