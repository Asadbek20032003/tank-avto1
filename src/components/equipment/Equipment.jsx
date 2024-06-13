// import React from "react";
import Inivation from "./equipmentitems/Inivation";
import Modelinput from "./equipmentitems/Modelinput";
import "@/assets/css/equipment/equipments.css";
import { Button } from "react-bootstrap";
import Trade from "./equipmentitems/Trade";

const Equipment = () => {
  return (
    <>
      <div className="equipmemt">
        <div className="container">
          <div className="komplekts">
            <h1>ПОДБЕРИТЕ КОМПЛЕКТАЦИЮ</h1>
            <Modelinput />
            <Inivation />
            <div className="equip__btn">
              <Button>Загрузить еще</Button>
            </div>
          </div>
          <Trade />
        </div>
      </div>
    </>
  );
};

export default Equipment;
