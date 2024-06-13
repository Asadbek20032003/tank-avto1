// import React from 'react'

import Tank300 from "@/assets/image/cars/tank300Inivation.svg";
import tag01 from "@/assets/image/icons/tag-01.svg";
import gift02 from "@/assets/image/icons/gift-02.svg";
import chevronRight from "@/assets/image/icons/chevron-right.svg";
import chevronRightWhite from "@/assets/image/icons/chevron-right_white.svg";
import { Button } from "react-bootstrap";

import "@/assets/css/equipment/inivation.css";

const Inivation = () => {
  return (
    <div className="get__inivation">
      <div className="inivation__details">
        <div className="details__img">
          <img src={Tank300} alt="Tank 300" />
        </div>
        <div className="details__items">
          <div className="items__titles">
            <div className="titles__title">
              <h2>TANK 300</h2>
              <p>2.0 л. Бензин, Полный, Автоматическая</p>
            </div>
            <div className="titles__title__icon">
              <h3>
                <del>3 649 000 ₽</del>
              </h3>
              <div className="title__icon">
                <p>
                  <img src={tag01} alt="tag-01" />
                  Выгода по Trade-in до 450 000 ₽
                </p>
                <p>
                  <img src={gift02} alt="gift-02" /> Керамическое покрытие в подарок!
                </p>
              </div>
            </div>
          </div>
          <div className="items__btn">
            <Button>
              Получить предложение <img src={chevronRight} alt="right" />
            </Button>
            <Button>
              Тест-драйв <img src={chevronRightWhite} alt="right" />
            </Button>
          </div>
        </div>
      </div>
      <div className="inivation__details">
        <div className="details__img">
          <img src={Tank300} alt="Tank 300" />
        </div>
        <div className="details__items">
          <div className="items__titles">
            <div className="titles__title">
              <h2>TANK 300</h2>
              <p>2.0 л. Бензин, Полный, Автоматическая</p>
            </div>
            <div className="titles__title__icon">
              <h3>
                <del>3 649 000 ₽</del>
              </h3>
              <div className="title__icon">
                <p>
                  <img src={tag01} alt="tag-01" />
                  Выгода по Trade-in до 450 000 ₽
                </p>
                <p>
                  <img src={gift02} alt="gift-02" /> Керамическое покрытие в подарок!
                </p>
              </div>
            </div>
          </div>
          <div className="items__btn">
            <Button>
              Получить предложение <img src={chevronRight} alt="right" />
            </Button>
            <Button>
              Тест-драйв <img src={chevronRightWhite} alt="right" />
            </Button>
          </div>
        </div>
      </div>
      <div className="inivation__details">
        <div className="details__img">
          <img src={Tank300} alt="Tank 300" />
        </div>
        <div className="details__items">
          <div className="items__titles">
            <div className="titles__title">
              <h2>TANK 300</h2>
              <p>2.0 л. Бензин, Полный, Автоматическая</p>
            </div>
            <div className="titles__title__icon">
              <h3>
                <del>3 649 000 ₽</del>
              </h3>
              <div className="title__icon">
                <p>
                  <img src={tag01} alt="tag-01" />
                  Выгода по Trade-in до 450 000 ₽
                </p>
                <p>
                  <img src={gift02} alt="gift-02" /> Керамическое покрытие в подарок!
                </p>
              </div>
            </div>
          </div>
          <div className="items__btn">
            <Button>
              Получить предложение <img src={chevronRight} alt="right" />
            </Button>
            <Button>
              Тест-драйв <img src={chevronRightWhite} alt="right" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inivation;
