import {combineReducers} from "redux";
import { reducer as formReducer } from 'redux-form'
import starterReducer from "../containers/StarterContainer/starterReducer";


const rootReducer = combineReducers({
  starterReducer: starterReducer,
  form: formReducer,
});

export default rootReducer;