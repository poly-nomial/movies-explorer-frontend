import promoPicture from "../images/landing-pic.svg";

function Promo() {
  return (
    <section className="promo">
      <h1 className="promo__title">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        src={promoPicture}
        alt="Декоративный узор"
        className="promo__picture"
      />
    </section>
  );
}

export default Promo;
