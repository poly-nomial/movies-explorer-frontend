export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getUser() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res))
      .then(({ data }) => data);
  }

  updateProfile(newName, newEmail) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: "include",
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        email: newEmail,
        name: newName,
      }),
    })
      .then((res) => this._getResponseData(res))
      .then(({ data }) => data);
  }

  saveMovie(movie) {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(movie),
    }).then((res) => this._getResponseData(res));
  }

  getSavedMovies() {
    return fetch(`${this._baseUrl}/movies`, {
      credentials: "include",
      method: "GET",
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res))
      .then(({ data }) => data);
  }

  deleteSavedMovie(movie) {
    return fetch(`${this._baseUrl}/movies/${movie._id}`, {
      credentials: "include",
      method: "DELETE",
      headers: this._headers,
    }).then((res) => this._getResponseData(res));
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    } else {
      return res.json();
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
