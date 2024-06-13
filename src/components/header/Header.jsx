import { Button } from "react-bootstrap";
import chevronRight from "@/assets/image/icons/chevron-right.svg";
import "@/assets/css/header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__items">
            <div className="items__title">
              <p>Улучшим любые условия</p>
              <h1>TANK 500</h1>
              <p>Осталось всего 5 автомобилей!</p>
            </div>
            <div className="items__btn">
              <Button>
                Получить предложение <img src={chevronRight} alt="image" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
