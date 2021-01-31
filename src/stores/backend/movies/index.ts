import {
  action,
  observable,
} from 'mobx';
import {
  createModelSchema,
  primitive,
} from 'serializr';
import {
  Actor,
  Movie,
  Genre,
  MovieSearchOptions,
} from 'shared/DTOs/movies';
import {
  ListBackendEntity, LoadingState,
} from 'utils';
import {
  BackendStores,
} from '..';
import {
  BaseBackendStore,
} from '../types';
import {
  getPopularMovies,
  getActorById,
  getMoviesGenres,
  getTopRatedMovies,
  getUpComingMovies,
  searchMovies,
  getMovieById,
  getActors,
  getActorMovies,
  getMovieVideo,
  getSimilarMovies,
  getGenreMovies,
} from './requests';

createModelSchema(Movie, {

});

export class MovieStore extends BaseBackendStore {
  getPopularMovies = async (): Promise<Movie[]> => {
    const data = await this.connections.backend.httpGet(getPopularMovies);
    console.log('popular === ', data);
    return data.results;
  };

  getTopRatedMovies = async (): Promise<Movie[]> => {
    const data = await this.connections.backend.httpGet(getTopRatedMovies);
    console.log('top rated === ', data);
    return data.results;
  };

  getUpComingMovies = async (): Promise<Movie[]> => {
    const data = await this.connections.backend.httpGet(getUpComingMovies);
    console.log('up coming === ', data);
    return data.results;
  };

  getMovies = async (options: MovieSearchOptions): Promise<Movie[]> => {
    if (options && options.query) {
      const data = await this.connections.backend.httpGet(searchMovies, {
        params: {
          query: options.query,
          page: 1,
        }
      });
      console.log('search movies === ', data);
      return data.results;
    }
    const data = await this.connections.backend.httpGet(getPopularMovies);
    console.log('all movies === ', data);
    return data.results;
  };

  getGenres = async (): Promise<Genre[]> => {
    const data = await this.connections.backend.httpGet(getMoviesGenres);
    console.log('Genres === ', data);
    return data.genres;
  };

  getSimilarMovies = async (options: any): Promise<Movie[]> => {
    const data = await this.connections.backend.httpGet(getSimilarMovies(options.id));
    console.log('similar === ', data);
    return data.results;
  };

  getActors = async (): Promise<Actor[]> => {
    const data = await this.connections.backend.httpGet(getActors);
    console.log('Actors === ', data);
    return data.results;
  };

  getMoviesByGenreId = async (options: any): Promise<Movie[]> => {
    const data = await this.connections.backend.httpGet(getGenreMovies, {
      params: {
        with_genres: options.genreId,
      }
    });
    console.log('movie  === ', data);
    return data.results;
  };


  @observable _popularMovies: Movie [] = [];
  @observable _topRatedMovies: Movie [] = [];
  @observable _upComingMovies: Movie [] = [];
  @observable _allMOvies: Movie [] = [];
  @observable _moviesGenre: Movie[] =[]; 
  @observable _similarMovies: Movie[] =[];  

  @observable _genres: Genre [] = [];

  @observable selectedMovie: Movie = {} as Movie;
  @observable selectedActor: Actor = {} as Actor;
  @observable selectedActorMovies: Movie[] = [];
  @observable _actors: Actor[] = [];
  @observable getActorsLoadingState: LoadingState = LoadingState.IDLE;
  @observable getActorsMoviesLoadingState: LoadingState = LoadingState.IDLE;
  @observable getMovieLoadingState: LoadingState = LoadingState.IDLE;

  @observable actors = new ListBackendEntity(
    this,
    '_actors',
    this.getActors,
  );

  @observable popularMovies = new ListBackendEntity(
    this,
    '_popularMovies',
    this.getPopularMovies,
  );

  @observable topRatedMovies = new ListBackendEntity(
    this,
    '_topRatedMovies',
    this.getTopRatedMovies,
  );

  @observable similarMovies = new ListBackendEntity(
    this,
    '_similarMovies',
    this.getSimilarMovies,
  );

  @observable upComingMovies = new ListBackendEntity(
    this,
    '_upComingMovies',
    this.getUpComingMovies,
  );

  @observable genres = new ListBackendEntity(
    this,
    '_genres',
    this.getGenres,
  );

  @observable allMovies = new ListBackendEntity(
    this,
    '_allMovies',
    this.getMovies,
  );

  @observable moviesGenre = new ListBackendEntity(
    this,
    '_moviesGenre',
    this.getMoviesByGenreId,
  );

  constructor(
    public parent: BackendStores,
  ) {
    super();
    this.makeObservable();
  }

  @action async getMovieById(id: string) {
    this.getMovieLoadingState = LoadingState.LOADING;
    const data = await this.connections.backend.httpGet(getMovieById(id));
    const videos = await this.connections.backend.httpGet(getMovieVideo(id));
    this.selectedMovie = data;
    this.selectedMovie.trailer = videos.results[0].key;
    this.getMovieLoadingState = LoadingState.SUCCEEDED;
  }

  @action async getActorById(id: string) {
    this.getActorsLoadingState = LoadingState.LOADING;
    const data = await this.connections.backend.httpGet(getActorById(id));
    this.selectedActor = data;
    this.getActorsLoadingState = LoadingState.SUCCEEDED;
  }

  @action async getActorMovies(id: string) {
    this.getActorsMoviesLoadingState = LoadingState.LOADING;
    const data = await this.connections.backend.httpGet(getActorMovies(id));
    this.selectedActorMovies = data.cast;
    this.getActorsMoviesLoadingState = LoadingState.SUCCEEDED;
  }
}
