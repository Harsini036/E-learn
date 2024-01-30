import { configureStore } from "@reduxjs/toolkit";

import ProfileReducer from "./components/student_profile/ProfilSlice";

const store = configureStore({
  reducer: {
    courseList: ProfileReducer,
  },
});

export default store;
