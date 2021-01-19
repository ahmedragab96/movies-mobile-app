import {
  action,
  observable,
} from 'mobx';
import {
  createModelSchema,
  primitive,
} from 'serializr';
import {
  PopularMovie,
  Movie
} from 'shared/DTOs/movies';
import {
  ListBackendEntity,
} from 'utils';
import {
  BackendStores,
} from '..';
import {
  BaseBackendStore,
} from '../types';
import {
  getPopularMovies,
  getMovieById
} from './requests';

createModelSchema(PopularMovie, {

});

export class MovieStore extends BaseBackendStore {
  getPopularMovies = async (): Promise<PopularMovie[]> => {
    const data = await this.connections.backend.httpGet(getPopularMovies);
    return data;
  };

  @observable _popularMovies: PopularMovie [] = [];

  @observable selectedMovie: Movie = {} as Movie;

  @observable popularMovies = new ListBackendEntity(
    this,
    '_popularMovies',
    this.getPopularMovies,
  );

  constructor(
    public parent: BackendStores,
  ) {
    super();
    this.makeObservable();
  }

  @action async getProgramById(id: string) {
    const data = await this.connections.backend.httpGet(getMovieById(id));
    this.selectedMovie = data;
  }
}
