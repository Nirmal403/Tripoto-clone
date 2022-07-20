import React from 'react';
import {Box, InputGroup, Input, InputRightElement} from "@chakra-ui/react";
import { SearchIcon } from '@chakra-ui/icons';

const Searchbar = () => {
  return (
    <Box >
    <InputGroup
    // border= "1px solid red"
    width="500px" margin="auto">
      <Input bg="white"
      placeholder="Search for itineraries, destination , hotels or  activites" />
      <InputRightElement
        pointerEvents="none"
        children={<SearchIcon color="black.300" />}
      />
    </InputGroup>
  </Box>
  )
}

export default Searchbar