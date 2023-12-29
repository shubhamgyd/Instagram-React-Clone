import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

const Signup = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Input
        placeholder="Email"
        type="email"
        fontSize={14}
        value={inputs.email}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
      />
      <Input
        placeholder="Username"
        type="text"
        fontSize={14}
        value={inputs.username}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
      />
      <Input
        placeholder="Full Name"
        type="text"
        fontSize={14}
        value={inputs.fullName}
        size={"sm"}
        onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
      />
      <InputGroup>
        <Input
          placeholder="Password"
          fontSize={14}
          type={showPassword ? "text" : "password"}
          value={inputs.password}
          size={"sm"}
          onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
        />
        <InputRightElement h={"full"}>
          <Button
            variant={"ghost"}
            size={"sm"}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
          </Button>
        </InputRightElement>
      </InputGroup>

      <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14}>
        Sign Up
      </Button>
    </>
  );
};

export default Signup;
