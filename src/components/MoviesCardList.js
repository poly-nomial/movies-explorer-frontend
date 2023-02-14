import MoviesCard from "./MoviesCard";

function MoviesCardList(props) {
  return (
    <section className="movies-card-list">
      {props.cardList.map((movie, i) => (
        <MoviesCard movie={movie} buttonClass={props.buttonClass} key={i} />
      ))}
    </section>
  );
}

export default MoviesCardList;
