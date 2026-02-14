import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Videos";
import Upload from "./pages/Upload";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from './pages/NotFound'
import Footer from "./components/Footer";


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/upload" element={<Upload/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
