import {
  BaseDTO,
} from '../types';

export class Movie extends BaseDTO {
  adult: boolean;
  backdrop_path: string;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  trailer: string;
  vote_average: number;
  vote_count: number;
  genres: Genre[];
}

export class Actor extends BaseDTO {
  birthday: string;
  known_for_department: string;
  deathday: string;
  id: number;
  name: string;
  gender: number; // 1 => Female , 2 => Male 
  biography: string;
  popularity: number;
  place_of_birth: string;
  profile_path: string;
  imdb_id: string;
  video: string; 
}

export class Genre extends BaseDTO {
  id: number;
  name: string;
}

export interface MovieSearchOptions {
  query: string;
}

export enum Genres {
  HORROR = "Horror",
  COMEDY = "Comedy",
  SCIFI = "Science Fiction",
  FANTASY = "Fantasy",
  CRIME = "Crime",
  ROMANCE = "Romance",
}

