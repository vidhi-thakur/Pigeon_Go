import './App.css';
import Sidebar from "./sidebar_components/Sidebar"
import Chatroom from "./chatroom_components/Chatroom"
import Login from './pages/Login';
import { useStateValue } from "./StateProvider"

function App() {

  const [{user}, ] = useStateValue()
  return (
    <>
      {user ? (<div className="app">
        <div className="app__container">
          <Sidebar />
          <Chatroom />
        </div>
      </div>) : (<Login />)}
    </>
  );
}

export default App;
