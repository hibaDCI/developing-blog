import React from "react";
import Home from "./pages/Home";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import TemplateContainer from "./containers/TemplateContainer";
function App() {
  return (
    <div className="App">
      <TemplateContainer>
        <Routes>
          <Route element={<Home />} />
        </Routes>
      </TemplateContainer>
    </div>
  );
}

export default App;
