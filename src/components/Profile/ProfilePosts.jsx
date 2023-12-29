import { Box, Skeleton, VStack, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const ProfilePosts = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    },2000)
  },[])

  return (
    <Grid
      templateColumns={{
        sm:"repeat(1,1fr)",
        md:"repeat(3,1fr)",
      }}
      gap={1}
      columnGap={1}
    >
      {true && [0,1,2,4].map((_,idx)=>(
        <VStack key={idx} alignItems={"flex-start"}>
          <Skeleton w={"full"}>
            <Box h="300px">contents wrapped</Box>
          </Skeleton>
        </VStack>
      ))}
    </Grid>
  )
}

export default ProfilePosts