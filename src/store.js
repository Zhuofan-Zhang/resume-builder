import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./features/infoSlice";
import workReducer from "./features/workSlice";
import educationReducer from "./features/educationSlice";
import skillsReducer from "./features/skillsSlice";
import certificationReducer from "./features/certificationsSlice";
import stepperReducer from "./features/stepperSlice";
import projectReducer from "./features/projectSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    work: workReducer,
    education: educationReducer,
    skills: skillsReducer,
    projects: projectReducer,
    certifications: certificationReducer,
    stepper: stepperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
