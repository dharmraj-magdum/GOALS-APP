import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import goalReducer from "../features/goals/goalSlice";

export const store = configureStore({
	reducer: { auth: authReducer, goals: goalReducer },
});
//-->{"objdataname":"its reducer(have state and actions)"}
//we can have multiple such obj and its reducer
