import './App.css';
import Sidebar from "./components/Sidebar"
import ButtonModal from "./components/ButtonModal"

import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div className="app">
      {/* <div className="app__container">
        {/* <Sidebar /> */}
     {/* </div> */}
      
      <ButtonModal />
    </div>
  );
}

export default App;
