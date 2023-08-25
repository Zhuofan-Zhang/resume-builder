import { configureStore } from "@reduxjs/toolkit";
import infoReducer from "./features/infoSlice";
import workReducer from "./features/workSlice";
import educationReducer from "./features/educationSlice";
import skillsReducer from "./features/skillsSlice";
import interestsReducer from "./features/interestsSlice";
import stepperReducer from "./features/stepperSlice";

export const store = configureStore({
  reducer: {
    info: infoReducer,
    work: workReducer,
    education: educationReducer,
    skills: skillsReducer,
    interests: interestsReducer,
    stepper: stepperReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
