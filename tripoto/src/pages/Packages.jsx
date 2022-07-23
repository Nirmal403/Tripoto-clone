import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {
  Box,
  Heading,
  Input,
  Spacer,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
import Searchbar from '../components/Searchbar';
import Travel from '../components/Travel';
import Budget from '../components/Budget';
import Attend from '../components/Attend';

const Packages = () => {
  return (
    <div>
        <Navbar/>
        <Box
        height="400px"
        bgImage="url('https://cdn1.tripoto.com/media/filter/nxxl/img/311219/Image/1573737581_screen_shot_2019_11_14_at_6_46_59_pm.jpg')"
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
          Exclusive Tours & Holiday Packages
        </Heading>
        <br />
        <Searchbar/>
      </Box>
      <Travel/>
      <Budget/>
      <Attend/>
        <Footer/>
    </div>
  )
}

export default Packages;