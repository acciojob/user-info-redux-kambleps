
import React from "react";
import './../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {updateName,updateEmail} from "./action/actionCreater";


const App = () => {
  const name = useSelector(state=>state.name);
  const email = useSelector(state=>state.email);
  const dispatch = useDispatch();
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>User Information</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" onChange={(e)=>dispatch(updateName(e.target.value))} /></br>
        <label for="email">Email:</label>
        <input type="text" id="email" onChange={(e)=>dispatch(updateEmail(e.target.value))} />
        <p> Current value of Store:</p>
        <p> Name-{name}</p>
        <p> Email-{email}</p>
    </div>
  )
}

export default App
