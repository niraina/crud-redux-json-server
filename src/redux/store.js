import {createStore, applyMiddleware} from "redux";
import logger from "redux-logger";
// import reduxThunk from "redux-thunk";
import thunk from "redux-thunk";

import rootReducer from "./root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

// const middlewares = [reduxThunk]

// if(!process.env.NODE_ENV === "developpement") {
//     console.log("ok");
//     middlewares.push(logger)
// }

const store = createStore(
    //rootReducer, applyMiddleware(...middlewares)
    rootReducer, composeWithDevTools(applyMiddleware(thunk))
);

export default store;
