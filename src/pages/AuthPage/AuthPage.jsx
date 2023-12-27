import { Container, VStack } from "@chakra-ui/react";
import {Box,Image, Flex } from "@chakra-ui/react";
import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm"

const AuthPage = () => {
  return (
    <Container maxW={"container.md"} padding={0}>
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4} gap={10}>
        
        <Box display={{ base: "none", md: "block" }}>
          <Image src="/auth.png" h={650} alt="Phone img" />
        </Box>

        <VStack spacing={4} align={"stretch"}>
          <AuthForm />
          <Box textAlign={"center"}>
            Get the app.
          </Box>
          <Flex gap={5} justifyContent={"center"}>
            <Image src="/playstore.png" h={"10"} alt='Playstore logo'/>
            <Image src="/microsoft.png" h={"10"} alt='Microsoft logo'/>
          </Flex>
        </VStack>
    </Flex>
      </Container>
  );
};

export default AuthPage;
