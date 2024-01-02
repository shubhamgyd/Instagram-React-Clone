import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const GoolgeAuth = ({prefix}) => {
  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
      <Image src="/google.png" w={5} alt="Google logo"></Image>
      <Text mx="2" color={"blue.500"}>
        {prefix} with Google
      </Text>
    </Flex>
  );
};

export default GoolgeAuth;
