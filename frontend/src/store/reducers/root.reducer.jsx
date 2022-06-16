import { combineReducers } from "redux";
import commonReducer from "./common.reducer";
import tripReducer from "./trip.reducer";
import userReducer from "./user.reducer";
const rootReducer = combineReducers({
  user: userReducer,
  common: commonReducer,
  trip: tripReducer
});

export default rootReducer;
