import { Avatar, Button, Flex, VStack } from '@chakra-ui/react'
import React from 'react'

const SuggestedUser = ({followers, name, avatar}) => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={2}>
        <Avatar src={avatar} name={name} size={"md"}/>
        <VStack>

        </VStack>
      </Flex>

      <Button></Button>
    </Flex>
  )
}

export default SuggestedUser