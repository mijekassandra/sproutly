import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// components
import DesignSystem from "./DesignSystem";
import LandingPage from "./components/pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/styles" element={<DesignSystem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
