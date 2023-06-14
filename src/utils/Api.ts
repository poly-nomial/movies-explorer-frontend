import { ApiOptions, UserDTO, DataWrapper, MovieDTO, SavedMovieDTO } from "../types/types";

export class Api {
  private _baseUrl : string;
  private _headers : HeadersInit | undefined;
  constructor(options : ApiOptions) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    })
      .then((res) => this._getResponseData<DataWrapper<UserDTO>>(res))
      .then(({ data }) => data);
  }

  updateProfile(newName : string, newEmail : string) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        email: newEmail,
        name: newName,
      }),
    })
      .then((res) => this._getResponseData<DataWrapper<UserDTO>>(res))
      .then(({ data }) => data);
  }

  saveMovie(movie : MovieDTO) {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then((res) => this._getResponseData<DataWrapper<MovieDTO>>(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._getResponseData<DataWrapper<MovieDTO[]>>(res))
      .then(({ data }) => data);
  }

  deleteSavedMovie(movie : SavedMovieDTO) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData<T>(res : Response) : T | Promise<T>{
    if (!res.ok) {
      return Promise.reject<T>(`Ошибка: ${res.status}`);
    } else {
      return res.json() as T;
    }
  }
}

const api = new Api({
  baseUrl: "https://api.polybitfilms.nomoredomains.rocks",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
