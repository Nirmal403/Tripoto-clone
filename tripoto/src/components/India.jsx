import React from "react";
import {
  Box,
  Heading,
  Input,
  Spacer,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import Searchbar from "./Searchbar";

const India = () => {
  return (
    <div>
      <Box
        height="400px"
        bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
      >
        <Heading
          as="h1"
          color="white"
          fontFamily="inherit"
          fontWeight="500"
          lineHeight="1.1"
          // border="1px solid red"
          alignItems="center"
          textAlign="center"
          width="100%"
          paddingTop={40}
        >
          India's Largest Community of Travellers
        </Heading>
        <br />
        <Searchbar/>
      </Box>
    </div>
  );
};

export default India;
