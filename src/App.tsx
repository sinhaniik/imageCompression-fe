import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from "../src/pages/NotFoundPage";
import CompressorPage from "../src/pages/Compressor";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/" element={<CompressorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;