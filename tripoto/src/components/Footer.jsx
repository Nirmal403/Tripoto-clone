import React from 'react';
import {Divider,
    Box,
    Table,
    Image,
    Flex,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,} from "@chakra-ui/react";
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineInstagram,} from 'react-icons/ai';
import { ImYoutube2 } from "react-icons/im";
import { FaPinterestSquare } from "react-icons/fa";
import { MdUnsubscribe} from "react-icons/md";


const Footer = () => {
  return (
    <Box>
      <Divider orientation='horizontal' />
      <br/>
      <TableContainer  width="90%" margin="auto">
  <Table  
  variant="unstyled"
  
  size='sm'
  >
    <Thead >
      <Tr >
        <Th >
            <Image src={"https://cdn1.tripoto.com/assets/2.9/img/logo/header-blue.svg"} />
        </Th>
        <Td fontSize={"18px"}>About Tripoto</Td>
        <Td fontSize={"18px"}>Products</Td>
        <Td fontSize={"18px"} >Important Travel Links</Td>
        <Td fontSize={"18px"}>Partner Programs</Td>
      </Tr>
    </Thead>
    <Tbody >
      <Tr>
        <Td>India's Largest Travel Community</Td>
        <Td>How It Works</Td>
        <Td>Tour Pakages</Td>
        <Td>Goa Tourism</Td>
        <Td>Buy Travel Leads</Td>
      </Tr>
      <Tr>
        <Td>
            <Flex >
                <Box width="20px" height="20px"><AiFillFacebook/></Box>
                <Box width="20px" height="20px"> <AiFillTwitterSquare /></Box>
                <Box width="20px" height="20px">  <AiOutlineInstagram/></Box>
                <Box width="20px" height="20px">  <ImYoutube2/></Box>
                <Box width="20px" height="20px"> <FaPinterestSquare/> </Box>
                <Box width="20px" height="20px">  <MdUnsubscribe/></Box>
            </Flex>
            
        </Td>
        <Td>FAQ'S</Td>
        <Td>Travel Guides</Td>
        <Td>Dubai Tourism</Td>
        <Td>Partner With Us</Td>
      </Tr>
      <Tr >
        <Td> <Image src={"https://cdn1.tripoto.com/assets/2.9/img/logo/download-android-app.svg"}/></Td>
        <Td>Privacy Policy</Td>
        <Td>Trips & Itineraries</Td>
        <Td>Singapore Tourism</Td>
        <Td>Earn Credits</Td>
      </Tr>
      <Tr>
        <Td>
       
        </Td>
        <Td>Terms & Conditions</Td>
        <Td>Weekend Getaways</Td>
        <Td>Kerala Tourism</Td>
        <Td>Get Paid To Travel</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Careers</Td>
        <Td>Places to Visit</Td>
        <Td>Manali Tourism</Td>
        <Td>Import Blog To Itinerary</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td>Contact Us</Td>
        <Td>Other Travel Categories</Td>
        <Td>Bali Tourism</Td>
        <Td>Tripoto Ai</Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td>Tripoto Forum</Td>
        <Td>Sri Lanka Tourism</Td>
        <Td></Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td>Honeymoon Packages</Td>
        <Td>Honeymoon Destination In India</Td>
        <Td></Td>
      </Tr>
    </Tbody>
  </Table>
</TableContainer>
    </Box>
  )
}

export default Footer;