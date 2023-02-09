import MoviesCard from "./MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies">
      <div className="movies-card-list">
        {props.cardList.map((movie, i) => (
          <MoviesCard movie={movie} buttonClass={props.buttonClass} key={i} />
        ))}
      </div>
    </section>
  );
}

export default MoviesCardList;
