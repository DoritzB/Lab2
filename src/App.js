import logo from './logo.svg';
import './App.css';
import BasicButtons from "./mybutton";
import MediaCard from "./card";
import BasicTextFields from "./Text";
import BasicSelect from "./Select";
import RadioButtonsGroup from "./Radio";
import {useState} from "react";

function App() {
    const[showCard, setShowCard] = useState(false);
    const[showInput, setShowInput] = useState(true);
    const HandleShowCard = () => {
        setShowCard(!showCard)
        setShowInput(!showInput)
    }
  return (
        <div className="App">
      <h>Doritz Botosanu CR-201</h>
      <BasicButtons onClick={HandleShowCard} />
            <div className="cardbox">
                {showCard && <MediaCard/>}
                {showCard && <MediaCard/>}
                {showCard && <MediaCard/>}
            </div>
            <div className="cardbox1">
                {showInput && <RadioButtonsGroup/>}
                {showInput && <BasicTextFields/>}
                {showInput && <BasicSelect/>}
            </div>
    </div>
  );
}

export default App;
