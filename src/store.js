import {creteStore} from "redux";
import actionReducer from "./reducer/actionReducer";

const store = creteStore(actionReducer);

export default store;