import { useEffect } from "react"
import './App.css';
import Sidebar from "./sidebar_components/Sidebar"
import Chatroom from "./chatroom_components/Chatroom"
import Login from './pages/Login';
import { useStateValue } from "./StateProvider"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from './pages/Signup';
import { auth } from "./firebase"

function App() {

  const [{ user }, dispatch] = useStateValue()

  useEffect(() => {
    const userChange = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: "SET_USER",
          user: user
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })

    return () => {
      userChange();
    }
  }, [user, dispatch])

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
                  <Chatroom firstPage />
                </Route>
              </Switch>
            </Router>
          </div>
        </div>
      ) : (
        <>
          <Router>
            <Switch>
              <Route path="/">
                <Login />
              </Route>
              <Route path="/register">
                <Signup />
              </Route>
            </Switch>
          </Router>
        </>
      )}
    </>
  );
}

export default App;
