
import React from "react";
import './../styles/App.css';
import {useSelector,useDispatch} from "react-redux";
import {updateName,updateEmail} from "../action/actionCreater";


const App = () => {
  const name = useSelector(state=>state.name);
    const email = useSelector(state=>state.email);
    const dispatch = useDispatch();
  

  return (
    <div>
      <h1>User Information</h1>
      <label for="name">Name:</label>
      <input type="text" id="name" onChange={(e)=>dispatch(updateName(e.target.value))}></input><br></br>
      <label for="email">Email:</label>
      <input type="text" id="email" onChange={(e)=>dispatch(updateEmail(e.target.value))}></input>
      <h3>Current values in Store:</h3>
      <p>Name:{name}</p>
      <p>Email:{email}</p>
    </div>
  );
}

export default App;
