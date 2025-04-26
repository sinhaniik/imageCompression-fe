import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../src/pages/Home';
import NotFoundPage from "../src/pages/NotFoundPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;