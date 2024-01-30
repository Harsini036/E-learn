import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const notify = () => {
  toast.error("Course already added to the cart!");
};
const notifyAdded = () => {
  const savedUsername = localStorage.getItem("uname1");
  const savedPassword = localStorage.getItem("pswd1");
  if (savedPassword === "" && savedUsername === "") {
    toast.error("Login to start courses!");
  } else toast.success("Course added to the cart!");
};

const initialState = {
  courseList: [
    /* {
      id: 1,
      name: "Web Design",
      Author: "Kane Richars",
      Rating: "4.9 ⭐⭐⭐⭐⭐",
      Price: 499,
      src: "1.jpg",
      level: "Beginner",
    },
    {
      id: 2,
      name: "UI/UX Designer Advanced",
      Author: "Mart Lavis",
      Rating: "4.8 ⭐⭐⭐⭐⭐",
      Price: 999,
      src: "3.jpg",
      level: "Intermediate",
    }, */
  ],
};

const ProfileSlice = createSlice({
  name: "courseList",
  initialState,
  reducers: {
    addItem(state, action) {
      if (
        state.courseList.filter((item) => item.id == action.payload.id).length >
        0
      ) {
        notify();
      } else {
        state.courseList.push(action.payload);
        notifyAdded();
      }
    },

    deleteItem(state, action) {
      state.courseList = state.courseList.filter(
        (item) => item.id != action.payload
      );
    },

    clearCourses(state) {
      state.courseList = [];
    },

    markAsCompleted(state, action) {
      state.courseList = state.courseList.map((item) =>
        item.id === action.payload ? { ...item, progressBar: 100 } : item
      );
      //console.log(state.courseList);
    },

    updateProgress(state, action) {
      state.courseList = state.courseList.map((item) =>
        item.id === action.payload.id
          ? { ...item, progressBar: action.payload.progressBar }
          : item
      );

      //console.log(state.courseList);
    },
  },
});

export const {
  addItem,
  deleteItem,
  clearCourses,
  markAsCompleted,
  updateProgress,
} = ProfileSlice.actions;

export default ProfileSlice.reducer;

export const getCourses = (state) => state.courseList.courseList;

export const getProgress = (id) => (state) =>
  state.courseList.courseList.find((item) => item.id === id)?.progressBar ?? 0;
