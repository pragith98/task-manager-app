import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Tasks from "./pages/Tasks/Tasks";
import AddNew from "./pages/AddNew/AddNew";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/addnew" element={<AddNew/>} />
          <Route path="/" element={<Tasks/>} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
