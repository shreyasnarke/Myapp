import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import SideNav from "./components/side-component/SideNav";
import MainPage from "./components/Main/MainPage";
import PromptLab from "./components/PromptLab/PromptLab";

const App = () => {
  return (
    <>
      <Navbar />
      {/* <SideNav /> */}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/prompt-lab" element={<PromptLab />} />
      </Routes>
    </>
  );
};

export default App;
