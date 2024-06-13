import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";
import "@/assets/css/Tank/tank.css";
// import rasm1 from "@/assets/image/cars/images/slide1.svg";
// import rasm2 from "@/assets/image/cars/images/slide2.svg";
import rasm from "@/assets/image/cars/img.png";
import rasm1 from "@/assets/image/cars/img (1).png";
import rasm2 from "@/assets/image/cars/img (2).png";
import rasm3 from "@/assets/image/cars/img (3).png";
import rasm4 from "@/assets/image/cars/img (4).png";

import clipboardcheck from "@/assets/image/icons/clipboard-check.svg";
import certificate from "@/assets/image/icons/certificate-01.svg";
import sale from "@/assets/image/icons/sale.svg";
import tag from "@/assets/image/icons/tag-01.svg";
import warning from "@/assets/image/icons/warning.svg";
import t1 from "@/assets/image/cars/images/sv1.svg";
import t2 from "@/assets/image/cars/images/sv2.svg";
import t3 from "@/assets/image/cars/images/sv3.svg";
import t4 from "@/assets/image/cars/images/sv4.svg";
import t5 from "@/assets/image/cars/images/sv5.svg";
import { Button } from "react-bootstrap";

const Tank300 = () => {
  return (
    <div className="Tank">
      <div className="container">
        <div className="tank_title">
          <div className="tank_left w-100">
            <p className="tank_color " style={{ fontSize: "20px", fontWeight: "500" }}>
              Только в АВТОРУСЬ!
            </p>
            <h3 style={{ fontSize: "40px", fontWeight: "700" }}>TANK 300</h3>
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
              <Button className="btn_tank1 btn btn1" style={{ backgroundColor: "#ff9549" }}>
                Узнать стоимость по акции
              </Button>
              <Button className="btn_tank btn btn2">Тест-драйв</Button>
              <Button className="btn_tank btn btn3">Рассчитать кредит</Button>
            </div>
          </div>
          <div className="tank_right w-100 p-relative">
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
                <img src={rasm} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm1} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm2} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm3} alt="" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={rasm4} alt="" />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
        <ul className="list-unstyled d-flex align-items-center justify-content-between gap-3">
          <li className="tank_list ">
            <p className="p-0 m-0">
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
        <ul className="tanklar d-flex align-items-center justify-content-between list-unstyled  m-0 pt-3 pb-5">
          <li>
            <img className="mw-100" src={t1} alt="" />
          </li>
          <li>
            <img className="mw-100" src={t2} alt="" />
          </li>
          <li>
            <img className="mw-100" src={t3} alt="" />
          </li>
          <li>
            <img className="mw-100" src={t4} alt="" />
          </li>
          <li>
            <img className="mw-100" src={t5} alt="" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tank300;
