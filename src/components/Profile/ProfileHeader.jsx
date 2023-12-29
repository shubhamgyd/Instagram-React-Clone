import { Avatar, AvatarGroup, Flex, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const ProfileHeader = () => {
  return (
    <Flex gap={{ base: 4, sm: 10}} py={10} direction={{base: "column", sm: "row"}}>
      <AvatarGroup size={{base: "xl", md: "2xl"}} justifySelf={"center"} alignSelf={"flex-start"} mx={"auto"}>
        <Avatar name='As a Programmer' src='/profilepic.png' alt="As a programmer logo"/>
      </AvatarGroup>

      <VStack alignItems={"start"} gap={2} mx={"auto"} flex={1}>
        <Flex
          gap={4}
          direction={{base:"column", sm: "row"}}
          justifyContent={{base:"center", sm: "flex-start"}}
          alignItems={"center"}
          w={"full"}
        >
          <Text fontSize={{base: "sm", md: "lg"}}>asaprogammer_</Text>
        </Flex>
      </VStack>
    </Flex>
  )
}

export default ProfileHeader