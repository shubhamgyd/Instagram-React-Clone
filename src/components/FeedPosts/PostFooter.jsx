import { Box, Flex, Text } from "@chakra-ui/react";
import { CommentLogo, NotificationsLogo, UnlikeLogo } from "../../assests/constants";
import { useState } from "react";

const PostFooter = () => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };
  return (
    <>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} mb={2} mt={2}>
        <Box onClick={handleLike} cursor={"pointer"} fontSize={18}>
          {!liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={"pointer"} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>
      <Text fontWeight={600} color={'gray'}>
        {likes} likes
      </Text>
      <Text fontSize="sm" fontWeight={700}>
        asaprogrammer_{" "}
        <Text as='span' fontWeight={400}>
          Feeling good
        </Text>
      </Text>
      <Text fontSize='sm' color={'gray'}>
        View all 1,000 comments
      </Text>
    </>
  );
};

export default PostFooter;
