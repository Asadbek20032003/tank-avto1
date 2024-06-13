import "@/assets/css/Services/diller.css";
import award from "@/assets/image/icons/award-03.svg";
import clockRewind from "@/assets/image/icons/clock-rewind.svg";
import clipBoard from "@/assets/image/icons/clipboard-check.svg";
const Diller = () => {
  return (
    <div className="diller">
      <div className="diller__item">
        <img src={award} alt="award" />
        <div className="item__title">
          <h2>Официальный дилер</h2>
          <p>Гарантируем высокое качество обслуживания.</p>
        </div>
      </div>
      <div className="diller__item">
        <img src={clockRewind} alt="clock-rewind" />
        <div className="item__title">
          <h2>ПОКУПКА АВТО ЗА 1 ДЕНЬ</h2>
          <p>Удобный процесс покупки, включая оформление всех документов.</p>
        </div>
      </div>
      <div className="diller__item">
        <img src={clipBoard} alt="clipboard-check" />
        <div className="item__title">
          <h2>Официальный дилер</h2>
          <p>Широкий выбор комплектаций, с полным пакетом документов</p>
        </div>
      </div>
    </div>
  );
};

export default Diller;
