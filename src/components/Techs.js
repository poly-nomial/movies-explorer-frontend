import TechsItem from "./TechsItem";

function Techs() {
  return (
    <section className="slide techs">
      <h2 className="slide__title">Технологии</h2>
      <h3 className="techs__subtitle">7 технологий</h3>
      <p className="techs__text">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <div className="techs__list">
        <TechsItem name="HTML" />
        <TechsItem name="CSS" />
        <TechsItem name="JS" />
        <TechsItem name="React" />
        <TechsItem name="Git" />
        <TechsItem name="Express.js" />
        <TechsItem name="mongoDB" />
      </div>
    </section>
  );
}

export default Techs;
