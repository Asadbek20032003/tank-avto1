// import React from "react";
import Tank300 from "@/assets/image/cars/img (1).png";
import Tank500 from "@/assets/image/cars/img (7).png";

import "@/assets/css/Services/tankCar.css";
const TankCar = () => {
  return (
    <div className="tankCar">
      <h1>ЗАБРОНИРУЙТЕ Автомобиль СЕГОДНЯ И ПОЛУЧИТЕ ДОПОЛНИТЕЛЬНУЮ ВЫГОДУ 100 000 ₽</h1>
      <div className="tankCar__cars">
        <div className="cars__tank">
          <img src={Tank300} alt="Tank 300" />
          <p>TANK 300</p>
        </div>
        <div className="cars__tank">
          <img src={Tank500} alt="Tank 500" />
          <p>TANK 500</p>
        </div>
      </div>
    </div>
  );
};

export default TankCar;
