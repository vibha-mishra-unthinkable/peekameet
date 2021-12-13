import noteReducer from "./reducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({ noteReducer });
export default rootReducer;
