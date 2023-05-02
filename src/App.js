import './App.css';
import BasicButtons from "./mybutton";
import MediaCard from "./card";
import BasicTextFields from "./Text";
import BasicSelect from "./Select";
import RadioButtonsGroup from "./Radio";
import ToDoList from "./toDoList";
import LoginButton from "./login";
import MenuApi from "./ApiMenu";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
                path="/home"
                element={
                  <div className="App">
                    <h2>Doritz Botosanu CR-201</h2>
                    <BasicButtons/>
                    <LoginButton/>
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
                    <ToDoList/>
                  </div>
                }
            />
            <Route path="/books" element={<MenuApi />} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
