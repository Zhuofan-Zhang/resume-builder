import { createSlice } from "@reduxjs/toolkit";

const project = {
  title: "",
  description: "",
};

const initialState = {
  project: [project],
};

const projectSlice = createSlice({
  name: "project",
  initialState,
  reducers: {
    // reducer code here
    saveProject: (state, { payload }) => {
      state.project = payload.projects;
    },
  },
});
export const { saveProject } = projectSlice.actions;

export default projectSlice.reducer;