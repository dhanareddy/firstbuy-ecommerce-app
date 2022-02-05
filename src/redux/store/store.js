import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import rootReducer from "../reducer/Root_Reducer";
const middleWare = [thunk];
if (process.env.NODE_ENV === "development") {
  middleWare.push(logger);
}
const store = createStore(rootReducer, applyMiddleware(...middleWare));
let persistor = persistStore(store);
export { store, persistor };
