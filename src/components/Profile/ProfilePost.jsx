import { Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const ProfilePost = ({img}) => {
  return (
    <GridItem
      cursor={"pointer"}
      borderRadius={4}
      overflow={"hidden"}
      border={"1px solid"}
      borderColor={"whiteApha.300"}
      aspectRatio={1/1}
    >
      <Flex 
        opacity={0}
        _hover={{opacity:1}}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
      >
        <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
          <Flex>
            <AiFillHeart size={20}/>
            <Text fontWeight={"bold"} ml={2}>
              7
            </Text>
          </Flex>
          <Flex></Flex>
        </Flex>
      <Image src={img}></Image>
      </Flex>
    </GridItem>
  )
}

export default ProfilePost