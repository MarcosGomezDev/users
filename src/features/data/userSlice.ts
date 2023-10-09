import { createSlice } from "@reduxjs/toolkit";
import { LoginUser } from "../../Types/loginType";

const initialState: LoginUser = {
  email: "",
  loggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email } = action.payload;
      state.email = email;
      state.loggedIn = true;
    },
    logout: (state) => {
      state.email = "";
      state.loggedIn = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
