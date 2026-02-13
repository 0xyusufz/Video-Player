import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Box, Heading, Text } from "@chakra-ui/react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Video from "./pages/Video";

const PlaceholderPage = ({ title }) => (
  <Box p="10" pt="20">
    <Heading size="lg">{title}</Heading>
    <Text mt="3" color="gray.600">
      This page is not implemented yet.
    </Text>
  </Box>
);

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/upload" element={<PlaceholderPage title="Upload Video" />} />
        <Route path="/login" element={<PlaceholderPage title="Log in" />} />
        <Route path="/signup" element={<PlaceholderPage title="Sign up" />} />
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
