import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import Beer from "./components/Beer/Beer";
import Alcoholic from "./components/Alcoholic/Alcoholic";
import NonAlcoholic from "./components/NonAlcoholic/NonAlcoholic";
import Coffe from "./components/Coffe/Coffe";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/bezalkoholna-pica" element={<NonAlcoholic />} />
        <Route path="/alkoholna-pica" element={<Alcoholic />} />
        <Route path="/kafe" element={<Coffe />} />
        <Route path="/piva" element={<Beer />} />
      </Routes>
    </Router>
  );
}

export default App;
