function Profile(props) {
  return (
    <div className="profile">
      <h1 className="profile__greeting">Привет, {props.name}!</h1>
      <form className="profile__form">
        <span className="profile__input-line">
          <p className="profile__input-text">Имя</p>
          <input
            className="profile__input profile__input_name"
            value={props.name}
          />
        </span>
        <span className="profile__input-line">
          <p className="profile__input-text">E-mail</p>
          <input
            className="profile__input profile__input_email"
            value="email@email.com"
          />
        </span>
        <button type="submit" className="profile__button hover-opacity">
          Редактировать
        </button>
      </form>
      <button
        type="button"
        className="profile__button profile__button_exit hover-opacity"
      >
        Выйти из аккаунта
      </button>
    </div>
  );
}

export default Profile;
