import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducers from "./user-reducers";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducers,
    authUser: authReducer

    }
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;