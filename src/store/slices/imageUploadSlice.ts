// for handling image and target size

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ImageUploadState {
    selectedFile: File | null;
    targetSize: number;
    previewUrl: string | null;
}

const initialState: ImageUploadState = {
    selectedFile: null,
    targetSize: 50,
    previewUrl: null,
};

const imageUploadSlice = createSlice({
    name: 'imageUpload',
    initialState,
    reducers: {
        setSelectedFile: (state, action: PayloadAction<File>) => {
            state.selectedFile = action.payload;
        },
        setTargetSize: (state, action: PayloadAction<number>) => {
            state.targetSize = action.payload;
        },
        setPreviewUrl: (state, action: PayloadAction<string>) => {
            state.previewUrl = action.payload;
        },
    },
});

export const { setSelectedFile, setTargetSize, setPreviewUrl } = imageUploadSlice.actions;  
export default imageUploadSlice.reducer;