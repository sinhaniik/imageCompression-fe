# 📸 Image Compressor (Frontend)

A simple and user-friendly web app to compress images (JPG, PNG) by setting a target size in KB.  
This project communicates with a backend API (`/api/compress`) to perform the compression and returns a downloadable compressed image.

## 🚀 Tech Stack

- **React** (with TypeScript)
- **Redux Toolkit** (for state management)
- **Tailwind CSS** (for styling)
- **Axios** (for API calls)

## 🎯 Features

- Upload an image (JPG, PNG)
- Input target size (in KB)
- Compress image via backend API
- Download the compressed image automatically
- Preview selected image before compressing

## 📦 Installation

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/image-compressor-frontend.git
   cd image-compressor-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. Frontend will be running at:
   `http://localhost:5173` (or whichever port your Vite/CRA is configured)

## 🔗 Backend API Requirement

Make sure your backend API is running at:

```bash
POST http://localhost:3000/api/compress
```

**Payload:**
- FormData with fields:
  - `image`: (File)
  - `targetSizeKB`: (Number)

Backend responds with the compressed image as a binary blob.

## 📝 Usage Flow

1. **Select Image**
   - Choose an image file (.jpg, .png) from your computer.

2. **Enter Target Size**
   - Specify the desired size in KB (example: 50KB).

3. **Click "🔥 Compress Image"**
   - Sends request to backend
   - Waits for compressed image response

4. **Download Starts Automatically**
   - The compressed image gets downloaded.

## 📋 TODOs (Optional Improvements)

* Show compressed image preview before downloading
* Add drag-and-drop image upload
* Display original vs compressed size
* Mobile responsive tweaks