import {createSlice} from "@reduxjs/toolkit";

const education = {
    institute: "",
    gpa: "",
    degree: "",
    study: "",
    date: "",
};

const initialState = {
    education: [education],
};
const educationSlice = createSlice({
    name: "education",
    initialState,
    reducers: {
        // reducer code
        saveEducation: (state, {payload}) => {
            state.education = payload.education;
        },
    },
});

export const {saveEducation} = educationSlice.actions;

export default educationSlice.reducer;