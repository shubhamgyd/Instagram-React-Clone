import { Container, Flex, Box, Skeleton, SkeletonCircle, VStack } from "@chakra-ui/react";
import FeedPost from "./FeedPost";
import { useState } from "react";
import { useEffect } from "react";

const FeedPosts = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
  return (
    <Container maxW={"container.sm"} py={10} px={2}>
      {isLoading && 
        [0,1,2,3].map((_,idx) => (
          <VStack key={idx} gap={4} alignItems={"flex-start"} mb={10}>
            <Flex gap='2'>
              <SkeletonCircle size={10} />
              <VStack gap={2} alignItems={"flex-start"}>
                <Skeleton height={10} w={200} />
                <Skeleton height={10} w={200} />
              </VStack>
            </Flex>
            <Skeleton w={"full"}>
              <Box h={'500px'} />
            </Skeleton>
          </VStack>
  ))}

    {!isLoading && (
      <>
      <FeedPost img="/img1.png" username="burakorkmezz" avatar="/img1.png">
        FeedPost
      </FeedPost>
      <FeedPost img="/img2.png" username="josh" avatar="/img2.png">
        FeedPost
      </FeedPost>
      <FeedPost img="/img3.png" username="janedoe" avatar="/img3.png">
        FeedPost
      </FeedPost>
      <FeedPost img="/img4.png" username="johndoe" avatar="/img4.png">
        FeedPost
      </FeedPost>
      </>
    )}
    </Container>
  );
};

export default FeedPosts;
