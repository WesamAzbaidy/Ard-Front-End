import {
  configureStore,
  combineReducers,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import login from "./Login/LoginReducer";
import ModeReducer from "./Mode/ModeReducer";
import weatherReducer from "./Weather/WeatherReducer";
import searchInputReducer from "./SearchInput/SearchInputReducer";
import loginReducer from "./Login/LoginReducer";
import { LoginActionTypes } from "./Login/LoginTypes";
import { WeatherActionTypes } from "./Weather/WeatherTypes";
import { ModeActionTypes } from "./Mode/ModeTypes";
import { SearchInputActionTypes } from "./SearchInput/SearchInputTypes";

const persistConfig = {
  key: "main",
  storage,
  manualPersist: true,
};

const rootReducer = combineReducers({
  Login: login,
  Mode: ModeReducer,
  Weather: weatherReducer,
  SearchInput: searchInputReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer as any);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }),
});

const Persistor = persistStore(store as any);

export type RootState = {
  Login: ReturnType<typeof loginReducer>;
  Mode: ReturnType<typeof ModeReducer>;
  Weather: ReturnType<typeof weatherReducer>;
  SearchInput: ReturnType<typeof searchInputReducer>;
  unknown: any;
};
export type AppDispatch = ThunkDispatch<
  RootState,
  unknown,
  | WeatherActionTypes
  | LoginActionTypes
  | ModeActionTypes
  | SearchInputActionTypes
>;

export { Persistor };
export default store;
