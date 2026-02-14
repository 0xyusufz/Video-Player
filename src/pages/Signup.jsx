import React from "react";
import { Container, Heading, Box, Input, Button, Text, Avatar } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <Container maxW={"container.xl"} h={"100vh"} p={"16"}>
      <form>
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={"4"}
          alignItems={"stretch"}
          spacing={"8"}
          w={["full", "96"]}
          m={"auto"}
          my={"16"}
          justifyContent={"center"}
        >
          <Heading>Video Player</Heading>
          <Avatar alignSelf={"center"} boxSize={"32"}/>
          <Input
            placeholder={"enter name"}
            type={"text"}
            required
            focusBorderColor={"purple.500"}
          />

          <Input
            placeholder={"enter email"}
            type={"email"}
            required
            focusBorderColor={"purple.500"}
          />
          <Input
            placeholder={"enter password"}
            type={"password"}
            required
            focusBorderColor={"purple.500"}
          />
          <Button colorScheme={"purple"} type={"submit"}>
            Sign Up
          </Button>

          <Text textAlign={"end"}>
            Already Signed Up?{" "}
            <Button
              colorScheme={"purple"}
              variant={"link"}
              alignSelf={"center"}
            >
              <Link to={"/login"}>Log In</Link>
            </Button>
          </Text>
        </Box>
      </form>
    </Container>
  );
};

export default Signup
