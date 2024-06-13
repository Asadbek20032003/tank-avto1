// import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import "@/assets/css/Tank/tank.css";
import rasm5 from "@/assets/image/cars/img (5).png";
import rasm6 from "@/assets/image/cars/img (6).png";
import rasm7 from "@/assets/image/cars/img (7).png";
import rasm8 from "@/assets/image/cars/img (8).png";
import clipboardcheck from "@/assets/image/icons/clipboard-check.svg";
import certificate from "@/assets/image/icons/certificate-01.svg";
import sale from "@/assets/image/icons/sale.svg";
import tag from "@/assets/image/icons/tag-01.svg";
import warning from "@/assets/image/icons/warning.svg";
import v1 from "@/assets/image/cars/images/v1.svg";
import v2 from "@/assets/image/cars/images/v2.svg";
import v3 from "@/assets/image/cars/images/v3.svg";
import v4 from "@/assets/image/cars/images/v4.svg";
import v5 from "@/assets/image/cars/images/v5.svg";
import { Button } from "react-bootstrap";

const Tank500 = () => {
  return (
    <div className="Tank">
      <div className="container">
        <div className="tank_title">
          <div className="tank_left w-100">
            <Swiper
              direction={"vertical"}
              slidesPerView={1}
              spaceBetween={30}
              mousewheel={true}
              pagination={{
                clickable: true,
              }}
              modules={[Mousewheel, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src={rasm5} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm6} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm7} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm8} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="tank_right w-100 text-white">
            <p className="tank_color" style={{ fontSize: "20px", fontWeight: "500" }}>
              Только в АВТОРУСЬ!
            </p>
            <h3 style={{ fontSize: "40px", fontWeight: "700px" }}>TANK 500</h3>
            <h4>
              Выгода по TRADE-IN <br />
              ДO 450 000 ₽
            </h4>
            <div className="waring">
              <p>
                <img src={warning} alt="" />
                Ограниченное предложение!
                <img src={warning} alt="" />
              </p>
            </div>
            <div className="tank_button">
              <Button className="btn_tank1 btn btn">Узнать стоимость по акции</Button>
              <Button className="btn_tank btn btn">Тест-драйв</Button>
              <Button className="btn_tank btn btn">Рассчитать кредит</Button>
            </div>
          </div>
        </div>
        <ul className="list-unstyled d-flex align-items-center justify-content-between gap-3">
          <li className="tank_list">
            <p className="m-0 p-0">
              <img src={clipboardcheck} alt="" />
              Автомобили в наличии с ПТС
            </p>
          </li>
          <li className="tank_list">
            <p className="m-0 p-0">
              <img src={certificate} alt="" />
              Сервисная поддержка до 5 лет / 150 000 км
            </p>
          </li>
          <li className="tank_list">
            <p className="m-0 p-0">
              <img src={tag} alt="" />
              Улучшим любое предложение
            </p>
          </li>
          <li className="tank_list">
            <p className="m-0 p-0">
              <img src={sale} alt="" />
              Кредит 0,01%
            </p>
          </li>
        </ul>
        <ul className="tanklar d-flex align-items-center justify-content-between list-unstyled m-0 pt-3 pb-5 ">
          <li>
            <img className="mw-100" src={v1} alt="" />
          </li>
          <li>
            <img className="mw-100" src={v2} alt="" />
          </li>
          <li>
            <img className="mw-100" src={v3} alt="" />
          </li>
          <li>
            <img className="mw-100" src={v4} alt="" />
          </li>
          <li>
            <img className="mw-100" src={v5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tank500;
