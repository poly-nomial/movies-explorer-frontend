function SearchBar() {
  return (
    <div className="search-bar">
      <form className="search-bar__form">
        <input
          className="search-bar__input"
          type="text"
          id="film-search"
          placeholder="Фильм"
          required
        />
        <button
          type="submit"
          className="search-bar__button hover-opacity"
          aria-label="Найти фильм"
        />
      </form>
      <label className="search-bar__label" htmlFor="short-films">
        <input
          type="checkbox"
          id="short-films"
          className="search-bar__checkbox"
        />
        <span className="search-bar__visible-checkbox"></span>
        <span className="search-bar__label-text">Короткометражки</span>
      </label>
    </div>
  );
}

export default SearchBar;
