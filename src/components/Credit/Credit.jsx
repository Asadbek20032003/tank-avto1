import "@/assets/css/credit/credit.css";
const Credit = () => {
  return (
    <>
      <div className="request__loan">
        <div className="container">
          <div className="loan__text">
            <h1>
              Оставьте заявку <br />
              на кредит
            </h1>
            <p>и получите одобрение за 1 день!</p>
            <p className="submit__text">Телефон</p>
          </div>
          <div className="loan__submit">
            <div className="submit__input">
              <input type="text" name="" id="" placeholder="+7 (___) ___-__-__" />
            </div>
            <div className="submit__btn">
              <button className="requests__title__btn">
                Заказать звонок <span> › </span>
              </button>
            </div>
          </div>
          <div className="loan__checked">
            <div className="check__color">
              <input type="checkbox" />
              <span className="checkmark"></span>
            </div>
            <label>Согласен на обработку персональных данных.</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Credit;
