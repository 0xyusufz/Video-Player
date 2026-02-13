import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Home = () => {
  return (
    <Box p="10" pt="20">
      <Heading size="lg">Home</Heading>
      <Text mt="3" color="gray.600">
        Welcome to your video player app.
      </Text>
    </Box>
  );
};

export default Home;
