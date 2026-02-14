import React from "react";
import { Container, Heading, Box, Input, Button, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Login = () => {
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
          <Heading>Welcome Back</Heading>

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
          <Button variant={"link"} alignSelf={"flex-end"}>
            <Link to={"/forgetpassword"}>forget password?</Link>
          </Button>
          <Button colorScheme={"purple"} type={"submit"}>
            Log in
          </Button>

          <Text textAlign={"end"}>
            New User?{" "}
            <Button
              colorScheme={"purple"}
              variant={"link"}
              alignSelf={"center"}
            >
              <Link to={"/signup"}>Sign Up</Link>
            </Button>
          </Text>
        </Box>
      </form>
    </Container>
  );
};

export default Login;
