import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import userReducers from "./user-reducers";
import authReducer from "./auth-reducer";



let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducers,
    authUser: authReducer

    }
);

let store = createStore(reducers);
window.store = store;

export default store;