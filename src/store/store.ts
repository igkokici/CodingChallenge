import { configureStore } from '@reduxjs/toolkit';
import topicReducer from './reducers/topicSlice'
import topicDetailsReducer from "./reducers/topicDetails"

export const store = configureStore({
  reducer: {
    topics: topicReducer,
    topic: topicDetailsReducer
  },
});
