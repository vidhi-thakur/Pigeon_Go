import './App.css';
import Sidebar from "./sidebar_components/Sidebar"

import "react-bootstrap/dist/react-bootstrap.min.js";

function App() {
  return (
    <div className="app">
      <div className="app__container">
        <Sidebar />
     </div>
    </div>
  );
}

export default App;
