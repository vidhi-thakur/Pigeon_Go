import { useEffect } from 'react';
import './App.css';
import Sidebar from "./sidebar_components/Sidebar"
import Chatroom from "./chatroom_components/Chatroom"
import Login from './pages/Login';
import { useStateValue } from "./StateProvider"
import { auth } from './firebase';

function App() {

  const [{user}, dispatch] = useStateValue()
  useEffect(() => {
    const stateChange = auth.onAuthStateChanged((authUser)=> {
      if(authUser){
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    
    return () => {
      stateChange();
    }
  }, [])
  
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
