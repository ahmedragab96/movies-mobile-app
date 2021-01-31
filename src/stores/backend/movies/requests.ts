export const getPopularMovies = 'movie/popular';
export const getUpComingMovies = `movie/upcoming`;
export const getTopRatedMovies = `movie/top_rated`;

export const getMovieById = (id: string) => `movie/${id}`;
export const getMovieVideo = (id: string) => `/movie/${id}/videos`;
export const searchMovies = `search/movie`;
export const getGenreMovies = `discover/movie`;

export const getMoviesGenres = `genre/movie/list`;

export const getActors = `person/popular`;
export const getActorById = (id: string) => `person/${id}`;
export const getActorMovies = (id: string) => `/person/${id}/movie_credits`;
export const getSimilarMovies = (id: string) => `/movie/${id}/similar`;
