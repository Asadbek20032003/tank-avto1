import Diller from "./diller/Diller";
import TankCar from "./tankcar/TankCar";
import Timer from "./timeservices/Timer";

import "@/assets/css/Services/services.css";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="container">
          <Timer />
          <Diller />
          <TankCar />
        </div>
      </div>
    </>
  );
};

export default Services;
