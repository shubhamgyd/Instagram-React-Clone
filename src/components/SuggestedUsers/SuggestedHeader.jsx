import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SuggestedHeader = () => {
  return (
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"full"}
    >
      <Flex alignItems={"center"} gap={2}>
        <Avatar
          src="/profilepic.png"
          alt="user profile pic"
          size="lg"
          name="as a programmer"
        ></Avatar>
        <Text fontSize={12} fontWeight={"bold"}>
          asaprogrammer
        </Text>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        style={{ textDecoration: "none" }}
        cursor={"pointer"}
      >
        Log out
      </Link>
    </Flex>
  );
};

export default SuggestedHeader;
