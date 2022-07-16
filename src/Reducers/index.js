import { combineReducers } from "redux";
import counterReducer from "./counter";
import loginReducer from "./isLogged";
// combined both reducers here.. reducer is something like current state of the globalized state,
// actions are dispatched on reducers,based on action type it changes the global state
const allReducers=combineReducers({
    counter:counterReducer,
    isLoggedIn:loginReducer
})
export default allReducers