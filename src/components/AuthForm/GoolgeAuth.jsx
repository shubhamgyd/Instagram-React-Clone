import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import useShowToast from "../../hooks/useShowToast";
import { auth, firestore } from "../../firebase/firebase";
import useAuthStore from "../../store/authStore";
import { doc, getDoc, setDoc } from "firebase/firestore";

const GoolgeAuth = ({ prefix }) => {
  const [signInWithGoogle, , , error] = useSignInWithGoogle(auth);
  const showToast = useShowToast();
  const loginUser = useAuthStore((state) => state.login);

  const handleGoogleAuth = async () => {
    try {
      const newUser = await signInWithGoogle();
      // console.log(newUser)
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return;
      }

      const docRef = doc(firestore, "users", newUser.user.uid);
      const userSnap = await getDoc(docRef);

      if(userSnap.exists()) {
        const userDoc = userSnap.data();
        localStorage.setItem
      }

      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: newUser.user.email,
          username: newUser.user.email.split("@")[0],
          fullName: newUser.user.displayName,
          bio: "",
          profilePicURL: newUser.user.photoURL,
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc));
        loginUser(userDoc);
      }
    } catch (error) {
      showToast("Error", error.message, "error");
    }
  };

  return (
    <Flex alignItems={"center"} justifyContent={"center"} w={"full"}>
      <Image src="/google.png" w={5} alt="Google logo"></Image>
      <Text
        mx="2"
        color={"blue.500"}
        cursor={"pointer"}
        onClick={handleGoogleAuth}
      >
        {prefix} with Google
      </Text>
    </Flex>
  );
};

export default GoolgeAuth;
