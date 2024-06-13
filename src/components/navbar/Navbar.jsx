// import React from "react";
import logo from "../../assets/image/logo/Clippathgroup.svg";
import iconlocation from "../../assets/image/icons/marker-pin-01.svg";
import iconSetting from "../../assets/image/icons/settings-01.svg";
import iconSpeedometer from "../../assets/image/icons/speedometer-04.svg";
import iconPhoneIncoming from "../../assets/image/icons/phone-incoming-01.svg";
import ellipse from "../../assets/image/icons/Ellipse.svg";
import { Button } from "react-bootstrap";
import "@/assets/css/navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="container m-auto">
          <div className="navbar__nav w-100">
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>
            <div className="navbar__items">
              <div className="items__item1">
                <div className="item__title__icon">
                  <p className="m-0 ">
                    <img src={iconlocation} alt="icon" />
                    Ярославское шоссе, владение 2 В, строение 3 (МКАД, 95 км)
                  </p>
                </div>
                <div className="item__icon__title gap-3">
                  <div className="title__service">
                    <p className="m-0 p-0">
                      <img src={iconSetting} alt="setting" />
                      Записаться на сервис
                    </p>
                  </div>
                  <div className="title__test">
                    <p className="m-0 p-0">
                      <img src={iconSpeedometer} alt="speedometer" />
                      Тест-драйв
                    </p>
                  </div>
                </div>
              </div>

              <hr />
              <div className="items__item2">
                <div className="item__titles">
                  <h1>АВТОРУСЬ TANK</h1>
                  <p>Официальный дилер</p>
                </div>
                <div className="item2__title">
                  <div className="item__call">
                    <p className="p-0 m-0">+7 (999) 999-99-99</p>
                    <div className="item__contact">
                      <p>
                        <img src={ellipse} alt="ellips" />
                        Мы на связи
                      </p>
                    </div>
                  </div>
                  <Button>
                    <img src={iconPhoneIncoming} alt="PhoneIcomming" />
                    Заказать звонок
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
