import {combineReducers} from "redux";
import starterReducer from "../containers/StarterContainer/starterReducer";

const rootReducer = combineReducers({
  starterReducer: starterReducer,
});

export default rootReducer;