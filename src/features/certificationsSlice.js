import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    certifications: [],
};

const certificationsSlice = createSlice({
    name: "certifications",
    initialState,
    reducers: {
        // reducer code here
        saveCertification: (state, { payload }) => {
            state.certifications = payload.certifications;
        },
    },
});
export const { saveCertification } = certificationsSlice.actions;

export default certificationsSlice.reducer;