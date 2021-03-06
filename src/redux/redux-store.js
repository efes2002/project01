import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./users-reducer"
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    usersPage: usersReducer,
    auth: authReducer

});
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store2 = store;

export default store;