function AboutProject() {
  return (
    <section className="slide about-project">
      <h2 className="slide__title">О проекте</h2>
      <div className="columns">
        <div className="column">
          <h3 className="column__title">Дипломный проект включал 5 этапов</h3>
          <p className="column__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </div>
        <div className="column">
          <h3 className="column__title">На выполнение диплома ушло 5 недель</h3>
          <p className="column__text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </div>
      </div>
      <div className="bars">
        <div className="bar bar_length_short bar_color_black">
          <p className="bar__text ">1 неделя</p>
        </div>
        <div className="bar bar_length_long bar_color_white">
          <p className="bar__text ">4 недели</p>
        </div>
      </div>
      <div className="bars">
        <div className="bar bar_length_short">
          <p className="bar__undertext bar_length_short">Back-end</p>
        </div>
        <div className="bar bar_length_long">
          <p className="bar__undertext bar_length_long">Front-end</p>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
