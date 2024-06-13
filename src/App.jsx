import Navbar from "./components/navbar/Navbar";
import "./app.css";
import Header from "./components/header/Header";
import Services from "./components/services/Services";
import Equipment from "./components/equipment/Equipment";
import Tankl300 from "./components/tank/Tankl300";
import Tankl500 from "./components/tank/Tankl500";
import Credit from "./components/Credit/Credit";
import Footer from "./components/footer/Footer";
// import Tank500 from "./components/tank/Tank500";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <Tankl300 />
      <Tankl500 />
      <Equipment />
      <Credit />
      <Footer />
    </>
  );
}

export default App;
