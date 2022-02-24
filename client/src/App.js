import React from "react";
import Home from "./pages/Home";
import "./App.css";
import {Routes, Route, Link} from "react-router-dom";
import TemplateContainer from "./containers/TemplateContainer";
import AddPost from "./components/Post/AddPost";
function App() {
  return (
    <div className="App">
      <TemplateContainer>
        <Routes>
          <Route element={<Home />} />
          <Route path="/posts/add_post" element={<AddPost />} />
        </Routes>
      </TemplateContainer>
    </div>
  );
}

export default App;
