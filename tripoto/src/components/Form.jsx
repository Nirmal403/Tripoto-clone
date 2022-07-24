import React, { useState } from "react";
import { Link } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  
} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Heading,
} from "@chakra-ui/react";
import {
  Button,
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInputField,
  NumberInput,
  NumberInputStepper,
} from "@chakra-ui/react";
import {
  Select,
  Radio,
  RadioGroup,
  Stack,
  Checkbox,
  CheckboxGroup,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Form = (props) => {

function dated(){
  var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate()+1;
var year = dateObj.getUTCFullYear();

var newdate = (day++) +"/" + month + "/"+ year;
return newdate;
}

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure()



  const [num, setnum] = useState(0);

  const handleChange = (num) => {
    setnum(num);

    console.log("value is:", num);
  };

  const amount = props.amount;
  // const total = num * amount;
  return (
    <div>
      <FormControl width="80%" margin="auto" marginTop="20px" >
        <FormLabel>Enter Your Details and Proceed To Book</FormLabel>
        <Input type="email" placeholder="Email" marginTop="10px" />
        <Input placeholder="Full Name" marginTop="10px" />
        <Input placeholder="Contact Number" marginTop="10px" />
        <Input placeholder="Depature City" marginTop="10px" />
        <NumberInput
          max={10}
          min={1}
          value={num}
          onChange={handleChange}
          type="number"
          id="num"
          name="num"
          marginTop="10px"
        >
          <NumberInputField placeholder="Number of People" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <Select placeholder="Check In Date" marginTop="10px">
          <option value="option1">{dated()}</option>
          <option value="option2">{dated()}</option>
          <option value="option3">{dated()}</option>
        </Select>
        <Stack marginTop="10px">
          <Radio size="md" name="1" colorScheme="blue">
            <Text fontWeight={600}>Wooden huts on twin sharing</Text>
          </Radio>
        </Stack>
        <Flex marginTop="10px">
          <Checkbox defaultChecked>Send me updates for booking</Checkbox>
          <Image
            width="20px"
            marginLeft="4px"
            height="20px"
            src={
              "https://cdn1.tripoto.com/assets/2.9/img/logo/whatsapp-logo.png"
            }
          />
        </Flex>
        <Flex marginTop="10px">
          <Heading as="h4" size="md">
            Amount:
          </Heading>
          <Spacer />
          <Heading as="h4" size="md">
            ₹{num * amount}
          </Heading>
        </Flex>
        <>
      <Button onClick={onOpen}    _hover={{ bg: "#3390dd" }}
          _active={{
            bg: "#3390dd",
            transform: "scale(0.98)",
            borderColor: "#3390dd",
          }}
          marginTop="8px"
          marginBottom="15px"
          width="100%"
          bgColor={"#3390dd"}
          color="white"
          fontWeight="bold">Next -{">"}{" "}</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader >Your Booking is done</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
              <Heading textAlign="center">Enjoy Your Trip!</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} margin="auto" onClick={() => {
                     
                     navigate('/');
                    //  window.location.reload(); 
                   //  handlechange();
                    
                    //  return <Link href="/"></Link>
                   }}
                   >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
      </FormControl>
    </div>
  );
};

export default Form;
