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
  vote_average: number;
  vote_count: number;
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
}

export class Genre extends BaseDTO {
  id: number;
  name: string;
}

