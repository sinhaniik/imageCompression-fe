import { configureStore } from '@reduxjs/toolkit';
import compressionReducer from './slices/compressionSlice';
import imageUploadReducer from './slices/imageUploadSlice';

const store = configureStore({
  reducer: {
    compression: compressionReducer,
    imageUpload: imageUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;