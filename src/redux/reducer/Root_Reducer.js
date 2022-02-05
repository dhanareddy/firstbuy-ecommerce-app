import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import AuthReducer from "./Auth_Reducer";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["data"],
};
const rootReducer = combineReducers({
  data: AuthReducer,
});
export default persistReducer(persistConfig, rootReducer);
