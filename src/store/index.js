import { configureStore } from "@reduxjs/toolkit";
import reducer from "../redux/reducer";

let store = configureStore({ reducer: reducer });

export default store;