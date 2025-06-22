import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/index";
import ToeicDay4Quiz from "./pages/ToeicDay4Quiz";
import Part5QuizPage from "./pages/part5"; // 새로 만든 것
import Part6QuizPage from "./pages/part6";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/toeicday4quiz" element={<ToeicDay4Quiz />} />
        <Route path="/part5" element={<Part5QuizPage />} />
        <Route path="/part6" element={<Part6QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
