import moveItems from "./addItemToCart";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    addItemToCart:moveItems
})

export default rootReducer;