import React from "react";

function SearchBar({
  onSubmit,
  switchState,
  toggleSwitchState,
  storageSearchQuery,
  onSearchQueryChange,
}) {
  function handleSearchQueryChange(e) {
    onSearchQueryChange(e.target.value);
  }

  function handleSwitchToggle() {
    toggleSwitchState();
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit();
  }

  return (
    <div className="search-bar">
      <form className="search-bar__form" onSubmit={handleSubmit}>
        <input
          className="search-bar__input"
          type="text"
          id="film-search"
          placeholder="Ключевое слово"
          onChange={handleSearchQueryChange}
          value={storageSearchQuery}
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
          checked={switchState}
          onChange={handleSwitchToggle}
        />
        <span className="search-bar__visible-checkbox"></span>
        <span className="search-bar__label-text">Короткометражки</span>
      </label>
    </div>
  );
}

export default SearchBar;
