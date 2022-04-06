import React from "react";
import { Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";

import Form from "./Form";
import Users from "./Users";
import Nav from "./Nav";


export default function App() {
  return (
    <div className="container">
      <Nav />
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
