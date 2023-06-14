export type LoggedInState = boolean | null;
export type ApiOptions = { 
    headers : HeadersInit | undefined;
    baseUrl : string
};
export type DataWrapper<T> = {data : T};
export type UserDTO = {
    email: string;
    password: string;
    name: string;
}
export type MovieDTO = {
    country : string,
    director : string,
    duration : string,
    year : string,
    description : string,
    image : string,
    trailerLink : string,
    thumbnail : string,
    movieId : number,
    nameRU : string,
    nameEN: string
}
export type SavedMovieDTO = MovieDTO & {
    _id : string
}