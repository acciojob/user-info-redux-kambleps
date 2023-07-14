import {UPDATE_EMAIL,UPDATE_NAME} from "../action/actionTypes";

const initial = {
    name:"",
    email:""
    }

function actionReducer(state=initial,action){
    switch(action.type){
        case UPDATE_NAME:
          return{...state,name:action.payload}
        case UPDATE_EMAIL:
          return{...state,email:action.payload}
        default:
          return store=initial
    }
}

export default actionReducer;