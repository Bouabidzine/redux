import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice/TaskSlice'

export const store = configureStore({
  reducer: {task:taskReducer},
})
