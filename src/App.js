import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div className="p-10 text-center text-2xl font-bold">REBLING 명품 매입 사이트 🚀</div>} />
      </Routes>
    </Router>
  );
}
