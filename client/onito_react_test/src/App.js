import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserForm from "./user-form";
import UserTable from "./userTable";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserForm />} />
        <Route path="/UserTable" element={<UserTable />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
