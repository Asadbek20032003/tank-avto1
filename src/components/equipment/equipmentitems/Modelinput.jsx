import "@/assets/css/select/select.css";

const Modelinput = () => {
  return (
    <div className="selects">
      <div className="container">
        <form>
          <div className="row">
            <div className="select__info col-4 ">
              <label htmlFor="city-select">Модель</label>
              <select name="city" id="city-select">
                <option value="">Select...</option>
                <option value="petersburg">Tank 300</option>
                <option value="samara">Tank 500</option>
                <option value="perm">Tank full</option>
              </select>
            </div>
            <div className="select__info col-4 ">
              <label htmlFor="city-select">Комплектация</label>
              <select name="city" id="city-select">
                <option value="">Select...</option>
                <option value="petersburg">Tank 300</option>
                <option value="samara">Tank 500</option>
                <option value="perm">Tank full</option>
              </select>
            </div>
            <div className="select__info col-4 ">
              <label htmlFor="city-select">Двигатель</label>
              <select name="city" id="city-select">
                <option value="">Select...</option>
                <option value="petersburg">Tank 300</option>
                <option value="samara">Tank 500</option>
                <option value="perm">Tank full</option>
              </select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modelinput;
