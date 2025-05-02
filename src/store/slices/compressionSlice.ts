// for tracking the compression state

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CompressionState {
    isLoading: boolean;
    isSuccess: boolean;
    error: string | null;
}

const initialState: CompressionState = {
    isLoading: false,
    isSuccess: false,
    error: null,
};


const counterSlice = createSlice({
    name: 'compression',
    initialState,
    reducers: {
        startCompression: (state) => {
            state.isLoading = true;
            state.isSuccess = false;
            state.error = null;
        },
        finishCompression: (state) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.error = null;
        },
        ErrorCompression: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.error = action.payload;
        },
    },
});

export const { startCompression, finishCompression, ErrorCompression } = counterSlice.actions;
export default counterSlice.reducer;