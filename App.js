import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import FormsButtons from "./FormsButtons";
import Conditions from "./Conditions";
import DisplayCurrentCity from "./DisplayCurrentCity";
import DisplayCurrentDateTime from "./DisplayCurrentDateTime";
import DisplayTempUnit from "./DisplayTempUnit";
import FiveDayForcast from "./FiveDayForcast";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <div className="border">
        <FormsButtons />
        <Conditions />
        <DisplayCurrentCity />
        <DisplayCurrentDateTime />
        <DisplayTempUnit />
        <FiveDayForcast />
        <Footer />
      </div>
    </div>
  );
}
