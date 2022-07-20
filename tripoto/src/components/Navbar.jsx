import React from "react";
import {Button, Box, Flex, Image, Spacer } from "@chakra-ui/react";
import homelogo from "../assests/homelogo.svg";
import logo from "../assests/logo.jpg";
import Forum from "../pages/Forum";
import Packages from "../pages/Packages";
import Signin from "../pages/Signin";
import { Link } from "@chakra-ui/react";
import { Navigate, NavLink, Route } from "react-router-dom";
import PublishTrip from "./PublishTrip";
import Inspirations from "./Inspirations";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <Box h="80px" bg="#3390dd" width="100%"   positon="fixed"
    // bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
    // border= "1px solid red"
    >
      <Flex>
        <Link href="/">
          <Image h="80px" w="180px" src={logo} 
            // border= "1px solid red"
            />
          
        </Link>
        <Spacer/>
        <Flex padding="1rem">
        <Searchbar/>
        </Flex>
        <Flex 
        // marginLeft="20%"
        >
          <Inspirations/>
        </Flex>
        <Box 
        // border="1px solid red"
        // marginLeft="20%"
         padding="0.75rem" >
          <Button
               bg="#3390dd" 
               _hover={{ bg: '#3390dd' }}
               _active={{
                 bg: '#3390dd',
                 transform: 'scale(0.98)',
                 borderColor: '#3390dd',
               }}
               color="white" 
              //  width='100%'
               py={7}
               // bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
               bgPosition='center'
               bgRepeat='no-repeat'
               mb={2}
              ><Link href="/forum" color="white"  padding="1rem" >
            Forum

          </Link>
          </Button>
          <Button
               bg="#3390dd" 
               _hover={{ bg: '#3390dd' }}
               _active={{
                 bg: '#3390dd',
                 transform: 'scale(0.98)',
                 borderColor: '#3390dd',
               }}
               color="white" 
              //  width='100%'
               py={7}
              //  bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
               bgPosition='center'
               bgRepeat='no-repeat'
              //  border="1px solid red"
               mb={2}
              ><Link href="/packages" color="white"  padding="1rem" >
            Packages

          </Link>
          </Button>


        
        </Box>
      
        <Flex>
          <PublishTrip/>
        </Flex>
        <Flex>
          <Signin />
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
