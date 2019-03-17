import { combineReducers } from "redux";
import { userReducer } from "./models/user.model";
import { cartReducer } from "./models/cart.model";

 

export const rootReducer = combineReducers({user: userReducer, cart:cartReducer});