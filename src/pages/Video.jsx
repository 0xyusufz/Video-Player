import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

const Video = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  return (
    <Box p="10" pt="20">
      <Heading size="lg">Videos</Heading>
      <Text mt="3" color="gray.600">
        {category ? `Showing category: ${category}` : "Showing all videos"}
      </Text>
    </Box>
  );
};

export default Video;
