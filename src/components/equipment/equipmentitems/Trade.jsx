import chevronRight from "@/assets/image/icons/chevron-right.svg";
import tradeCar from "@/assets/image/cars/image 290.svg";
import { Button } from "react-bootstrap";
import "@/assets/css/equipment/trade.css";
const Trade = () => {
  return (
    <div className="trade">
      <div className="trade__img">
        <img src={tradeCar} alt="tank 500" />
      </div>
      <div className="trade__title">
        <h2>ОБМЕН ПО TRADE-IN НА ВЫГОДНЫХ УСЛОВИЯХ</h2>
        <Button>
          Отправить заявку
          <img src={chevronRight} alt="right" />
        </Button>
      </div>
    </div>
  );
};

export default Trade;
