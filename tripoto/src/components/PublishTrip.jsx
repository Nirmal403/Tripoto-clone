import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
  } from '@chakra-ui/react';

import React from 'react';
import { Button } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';


const PublishTrip = () => {
  return (
    <Menu >
  <MenuButton as={Button} rightIcon={<FaChevronDown />}
    bg="#3390dd" 
    _hover={{ bg: '#3390dd' }}
    _active={{
      bg: '#3390dd',
      transform: 'scale(0.98)',
      borderColor: '#3390dd',
    }}
    color="white" 
    width='100%'
    py={10}
    // bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
    bgPosition='center'
    bgRepeat='no-repeat'
    mb={2}
  >
  Publish Trip
  </MenuButton>
  <MenuList boxShadow='2xl' p='6' rounded='md' bg='white'>
    <MenuItem>Create</MenuItem>
    <MenuItem>Upload Photos/Videos</MenuItem>
    <MenuItem>Import Blogs</MenuItem>
  </MenuList>
</Menu>
  )
}

export default PublishTrip;
