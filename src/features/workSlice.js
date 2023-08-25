import { createSlice } from "@reduxjs/toolkit";

const experience = {
  title: "aaa",
  organization: "certifications",
  city: "Dublin",
  country: "Ireland",
  startDate: "01/12/1999",
  endDate: "01/12/2020",
  description: "certificationscertificationscertificationscertificationscertificationscertificationscertifications",
};

const initialState = {
  experience: [experience],
};

const workSlice = createSlice({
  name: "work",
  initialState,
  reducers: {
    // reducer code here
    saveWork: (state, { payload }) => {
        state.experience = payload.work;
    },
  },
});
export const { saveWork } = workSlice.actions;

export default workSlice.reducer;