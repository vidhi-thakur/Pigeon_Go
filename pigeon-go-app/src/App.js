import './App.css';
import Sidebar from "./sidebar_components/Sidebar"
import Chatroom from "./chatroom_components/Chatroom"
import Login from './pages/Login';
import { useStateValue } from "./StateProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [{ user }] = useStateValue()

  return (
    <>
      {user ? (
        <div className="app">
          <div className="app__container">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/rooms/:roomId">
                  <Chatroom />
                </Route>
                <Route path="/">
                  <Chatroom />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      ) : (<Login />)}
    </>
  );
}

export default App;
