import React from 'react';
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
import { Button } from '@chakra-ui/react';
import { FaChevronDown } from 'react-icons/fa';

const Inspirations = () => {
  return (
    <Menu >
    <MenuButton as={Button} rightIcon={<FaChevronDown /> }
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
    Inspirations
    </MenuButton>
    <MenuList boxShadow='2xl' p='6' rounded='md' bg='white'>
      <MenuItem>Visit Dubai</MenuItem>
      <MenuItem>Visit Singapore</MenuItem>
      <MenuItem>Beaches</MenuItem>
      <MenuItem>MountainsHeritage</MenuItem>
      <MenuItem>Weekend Guide</MenuItem>
      <MenuItem>Upcoming Festivals</MenuItem>
      <MenuItem>Honeymoon Packages</MenuItem>
      <MenuItem>Wildlife Tourism</MenuItem>
      <MenuItem>Road Trips</MenuItem>
      {/* <MenuItem>Gateways Guide</MenuItem>
      <MenuItem>Luxury Travel</MenuItem>
      <MenuItem>Explore More</MenuItem> */}
    </MenuList>
  </Menu>
  )
}

export default Inspirations