import { useEffect, useMemo } from 'react';
import './App.css';
import Sidebar from "./sidebar_components/Sidebar"
import Chatroom from "./chatroom_components/Chatroom"
import Login from './pages/Login';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {

  const [{ user }, dispatch] = useStateValue()

  // useMemo(useEffect(() => {
  //   const userStateChange = auth.onAuthStateChanged((authUser) => {
  //     if (authUser) {
  //       return dispatch({
  //         type: "SET_USER",
  //         user: authUser
  //       })
  //     } else {
  //       return dispatch({
  //         type: "SET_USER",
  //         user: null
  //       })
  //     }

  //   })
  //   return userStateChange();
  // }), [user])
  

  return (
    <>
      {user ? (
        <div className="app">
          <div className="app__container">
            <Router>
              <Sidebar />
              <Switch>
                <Route path="/">
                  <Chatroom />
                </Route>
                <Route path="/rooms/:roomId">
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
