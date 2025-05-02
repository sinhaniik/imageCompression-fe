import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedFile, setTargetSize } from '../store/slices/imageUploadSlice';
import { startCompression, finishCompression, ErrorCompression } from '../store/slices/compressionSlice';

const ImageCompressor: React.FC = () => {
    const dispatch = useDispatch();

    // Access Redux state
    const { selectedFile, targetSize } = useSelector((state: any) => state.imageUpload);
    const { isLoading } = useSelector((state: any) => state.compression);

    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            console.log("inside selected file:", selectedFile);
            if (!selectedFile.type.startsWith('image/')) {
                console.log('Please select a valid image file (JPG, PNG)');
                return;
            }
            dispatch(setSelectedFile(selectedFile));
            setPreviewUrl(URL.createObjectURL(selectedFile));
        }
    };

    const handleSizeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = Number(e.target.value);
        if (value > 0) {
            dispatch(setTargetSize(value));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!selectedFile) {
            alert('Please select an image file');
            return;
        }

        dispatch(startCompression());

        try {
            const formData = new FormData();
            formData.append('image', selectedFile);
            formData.append('targetSizeKB', targetSize.toString());

            // Axios POST request to your backend
            const response = await axios.post('http://localhost:3000/api/compress', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                responseType: 'blob', // to handle binary data (image)
            });

            const blob = response.data;

            // Trigger download
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `compressed_${selectedFile.name}`;
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);

            dispatch(finishCompression());
            alert('Compression successful! Download started.');
        } catch (error) {
            dispatch(ErrorCompression('Compression failed. Please try again.'));
            alert('Error compressing image');
        }
    };

    return (
        <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md space-y-6">
            <h2 className="text-2xl font-bold text-center">📸 Image Compressor</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block mb-2 font-medium">Select Image (JPG or PNG)</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                </div>

                <div>
                    <label className="block mb-2 font-medium">Target Size (KB)</label>
                    <input
                        type="number"
                        value={targetSize}
                        onChange={handleSizeChange}
                        min={1}
                        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter target size in KB (e.g., 50)"
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full py-2 px-4 rounded-md text-white font-semibold ${isLoading ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
                >
                    {isLoading ? 'Compressing...' : '🔥 Compress Image'}
                </button>
            </form>

            {previewUrl && (
                <div className="mt-4">
                    <p className="font-medium mb-2">Image Preview:</p>
                    <img src={previewUrl} alt="Preview" className="max-w-full h-auto rounded-md" />
                </div>
            )}
        </div>
    );
};

export default ImageCompressor;
