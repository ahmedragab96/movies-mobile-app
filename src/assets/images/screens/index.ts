import home from './home/home.svg';
import homeActive from './home/homeActive.svg';
import movies from './home/movies.svg';
import moviesActive from './home/moviesActive.svg';
import actors from './home/actors.svg';
import actorsActive from './home/actorsActive.svg';
import genres from './home/genres.svg';
import genresActive from './home/genresActive.svg';
import search from './home/Search.svg';
import crime from './genres/crime.svg';
import scifi from './genres/scifi.svg';
import comedy from './genres/comedy.svg';
import romance from './genres/romance.svg';
import horror from './genres/horror.svg';
import fantasy from './genres/fantasy.svg';

export class Screens {
  static home = {
    home,
    homeActive,
    movies,
    moviesActive,
    actors,
    actorsActive,
    genres,
    genresActive,
    search,
  };

  static genres = {
    crime,
    scifi,
    comedy,
    romance,
    horror,
    fantasy,
  };
}
