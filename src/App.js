import logo from './logo.svg';
import './App.css';
import BasicButtons from "./mybutton";
import MediaCard from "./card";
import BasicTextFields from "./Text";
import BasicSelect from "./Select";
import RadioButtonsGroup from "./Radio";

function App() {
  return (
    <div className="App">
      <h>Doritz Botosanu CR-201</h>
      <BasicButtons/>
        <div className="Dreapta">
          <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        <MediaCard/>
        </div>
      <BasicTextFields/>
        <BasicSelect/>
        <RadioButtonsGroup/>
    </div>
  );
}

export default App;
