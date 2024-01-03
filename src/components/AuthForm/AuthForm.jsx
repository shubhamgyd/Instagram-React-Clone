import {
  Box,
  VStack,
  Image,
  Input,
  Button,
  Text,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import GoolgeAuth from "./GoolgeAuth";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Box border={"1px solid grey"} borderRadius={4} padding={5}>
        <VStack>
          <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />

          {isLogin ? <Login /> : <Signup />}

          {/** -------------------------- OR -------------------------- */}
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            my={4}
            gap={1}
            w={"full"}
          >
            <Box flex={2} h={"1px"} bg={"gray.400"} />
            <Text mx={1}> OR </Text>
            <Box flex={2} h={"1px"} bg={"gray.400"} />
          </Flex>

          <GoolgeAuth prefix={isLogin?"Log in":"Sign up"}/>
        </VStack>
      </Box>

      <Box border={"1px solid gray"} borderRadius={4} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
          </Box>
          <Box
            onClick={() => setIsLogin(!isLogin)}
            color={"blue.500"}
            cursor={"pointer"}
          >
            {isLogin ? "Sign Up" : "Log in"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
