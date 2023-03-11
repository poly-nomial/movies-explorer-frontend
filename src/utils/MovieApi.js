export class MovieApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
    this._fieldList = options.fieldList;
  }

  getMovies(searchQuery, start, size, shortFilmSwitch) {
    return fetch(`${this._baseUrl}/beatfilm-movies`, {
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res))
      .then((data) => {
        const regex = new RegExp(searchQuery, "i");
        const items = data.filter((film) =>
          this._fieldList.some(
            (field) =>
              regex.test(film[field]) &&
              (!shortFilmSwitch || film.duration <= 40)
          )
        );
        const total = items.length;
        return { total, items: items.slice(start, start + size) };
      });
  }

  _getResponseData(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка: ${res.status}`);
    } else {
      return res.json();
    }
  }
}

const movieApi = new MovieApi({
  baseUrl: "https://api.nomoreparties.co",
  headers: {
    "Content-Type": "application/json",
  },
  fieldList: ["nameRU", "nameEN", "director", "country", "year", "description"],
});

export default movieApi;
