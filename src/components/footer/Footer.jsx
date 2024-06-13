import "@/assets/css/footer/footer.css";
import Requests__img from "@/assets/img/requests__img.png";
import Map__img from "@/assets/img/map.png";
import Map__icon from "@/assets/img/map__icon.png";
import Call from "@/assets/img/call.svg";
import Setting from "@/assets/img/setting.svg";
import Time from "@/assets/img/hour.svg";
import Location from "@/assets/img/location.svg";
function App() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="footer__requests row ">
            <div className="requests__title col-lg-6 col-12 ">
              <h1>Индивидуальное предложение для корпоративных клиентов</h1>
              <button className="requests__title__btn">
                Отправить заявку <span> › </span>{" "}
              </button>
            </div>
            <div className="requests__info col-lg-6 col-12 ">
              <div className="info__img ">
                <img src={Requests__img} alt="Requests__img" />
              </div>
              <div className="info__text">
                <h4>Татьяна Санникова</h4>
                <p>Отдел корпоративных продаж АВТОРУСЬ </p>
              </div>
            </div>
          </div>

          <div className="footer__location ">
            <div className="location__img col-lg-3">
              <img className="map__img" src={Map__img} alt="Map__img" />
              <img className="map__icon" src={Map__icon} alt="Map__icon" />
            </div>
            <div className="map__request row col-12 ">
              <div className="request__adress col-lg-4 ">
                <p className="adress__title">Адрес</p>
                <p className="adress__text"> Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км) </p>
              </div>
              <div className="telefon__title col-3 ">
                <p className="telefon__title">Телефон</p>
                <p className="telefon__number">+7 (999) 999-99-99</p>
                <p className="telefon__text">
                  {" "}
                  <span>●</span> Мы на связи
                </p>
              </div>

              <div className="request__working col-lg-2 ">
                <p className="working__title">Режим работы</p>
                <p className="working__info">
                  Ежедневно <br />с 09:00 до 21:00
                </p>
              </div>
              <div className="request__btn col-lg-2">
                <button className="requests__title__btn">
                  Заказать звонок <span> › </span>
                </button>
              </div>
            </div>
          </div>

          <div className="footer__disclaimer">
            <h4 className="disclaimer__title">
              Дисклеймер <span>^</span>{" "}
            </h4>
            <p className="disclaimer__text">
              TANK 300 за 3 799 000руб с учетом поддержек. Цена на модель TANK (ТЭНК) 300 в комплектации Adventure
              (Эдвенчер) с двигателем 2,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом выгоды по
              трейд-ин 300 000 рублей. В трейд-ин принимаются автомобили с пробегом со сроком владения и регистрации
              (постановки на учет) в органах ГИБДД не менее 6 месяцев (в отношении автомобилей бренда TANK, Haval, Great
              Wall – 3 месяца) до сдачи автомобиля в трейд-ин. В качестве документов, подтверждающих срок владения
              сдаваемого в трейд-ин автомобиля, собственнику необходимо предоставить копию ПТС или СТС или карточку
              учета ТС из ГИБДД с печатью и подписью. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ.
              Предложение ограничено, не является офертой и действуетс <br />
              01.04.2024г.
              <br /> <br />
              TANK 500 за 5 349 000 руб с учетом поддержек. Цена на модель TANK (ТЭНК) 500 в комплектации Adventure
              (Эдвенчер) с двигателем 3,0T 4WD, 2023 года производства, цвет автомобиля: белый, с учетом прямой выгоды в
              950 000 рублей. Подробности уточняйте у менеджеров отдела продаж TANK АВТОРУСЬ. Предложение ограничено, не
              является офертой и действует с 01.04.2024г.
            </p>
          </div>
          <div className="footer__hr"></div>
          <div className="footer__tank__date">
            <div className="row">
              <div className="tank__date__info col-lg-6 col-12">
                <h4>АВТОРУСЬ TANK Лосиный Остров</h4>
                <p className="data__info__diler">Официальный дилер</p>
                <p className="data__info__location">
                  {" "}
                  <span>
                    <img src={Location} alt="" />
                  </span>{" "}
                  Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                </p>
                <p className="data__info__diler">Официальный дилер</p>
                <p className="data__info__carcod">ООО А АВТОРУСЬ МЫТИЩИ | ОГРН - 1147746695161, ИНН - 7728881903</p>
              </div>

              <div className="tank__date__calling col-lg-6 col-12">
                <div className="request__telefon ">
                  <div className="telefon__title ">
                    <p className="telefon__number">+7 (999) 999-99-99</p>
                    <p className="telefon__text">
                      {" "}
                      <span>●</span> Мы на связи
                    </p>
                  </div>
                  <div className="request__btn ">
                    <button className="requests__title__btn">
                      <span>
                        {" "}
                        <img src={Call} alt="" />{" "}
                      </span>
                      Заказать звонок{" "}
                    </button>
                  </div>
                </div>
                <div className="calling__text">
                  <p>
                    {" "}
                    <span>
                      <img src={Setting} alt="" />
                    </span>{" "}
                    Записаться на сервис
                  </p>
                  <p>
                    {" "}
                    <span>
                      <img src={Time} alt="" />
                    </span>{" "}
                    Тест-драйв
                  </p>
                </div>
              </div>
              <div className="footer__hr"></div>

              <div className="footer__end__text">
                <div className="end__text__one">
                  <p>© 2024, АВТОРУСЬ ТАНК</p>
                </div>
                <div className="end__text__two">
                  <p>Правовая информация</p>
                  <p>Условия акции</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
