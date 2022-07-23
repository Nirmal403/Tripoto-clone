import React ,{useRef , useEffect} from "react";
import {
  Image,
  Text,
  Flex,
  Spacer,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  Link,
  Heading,
} from "@chakra-ui/react";
import Lorem from "@chakra-ui/react";
import { FaFacebook } from "react-icons/fa";
import { Checkbox, CheckboxGroup } from '@chakra-ui/react';
import gfont from "../assests/gfont.png";
import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";


const Signin = () => {
  // const navigate = useNavigate();
  // const isAuth = useSelector((value) => value.auth.isAuth);
  // useEffect(() => {
  //   if (isAuth) {
   
  //     setTimeout(() => {
 
  //       navigate("/")
  //     }, 2000);
  //   }
  //   onOpen();
  // }, []);


  // const dispatch = useDispatch();

  // const handleData = (e) => {
  //   e.preventDefault();

  //   dispatch(
  //     saveDetails({
  //       email: email.current.value,
  //       password: password.current.value,
  //     })
  //   );
  // };
  // const email = useRef(null);
  // const password = useRef(null);






  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Button 
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
      
      onClick={onOpen}>Sign in</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Button  width='100%' colorScheme="facebook" leftIcon={<FaFacebook />}>
              Login in with Facebook
            </Button>
          </ModalHeader>
          <ModalBody>




          <Button 
               boxShadow='xs' p='6' rounded='md'
               width="100%" 
               // bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
               bgPosition='center'
               bgRepeat='no-repeat'
               _hover={{ bg: '#fff' }}
               _active={{
                 bg: '#fff',
                 transform: 'scale(0.98)',
                 borderColor: '#fff',
               }}
                bg="#fff" leftIcon={<m />} >
              <Image width='20px'src={gfont} ></Image> Login in with Gmail
            </Button>







            <Text as='h5' size='sm'  textAlign="center" color="#9197a3">OR</Text>
            <Input placeholder="EMAIL"   
            // ref={email}
            />
            <br/>
            <br/>
            <Input placeholder="PASSWORD" 
            //  ref={password}
             />
           <Flex >
           <Checkbox defaultChecked>Remember me</Checkbox>
           <Spacer/>
           <Link href="#" color="#3390dd" >Forget Password?</Link>
            </Flex>
            <br/>
            <Button 
            bg="#f27669"
             width="100%" 
             // bgImage="url('https://cdn1.tripoto.com/assets/2.9/img/home_banner_road.jpg')"
             bgPosition='center'
             bgRepeat='no-repeat'
             color="white" 
             _hover={{ bg: '#f27669' }}
             _active={{
               bg: '#f27669',
               transform: 'scale(0.98)',
               borderColor: '#f27669',
             }}
            //  onClick={(e) => handleData(e)}
            >LOG IN</Button>
            <br/>
            <Text as='h5' size='sm'  textAlign="center" color="#9197a3">Don't have an account? 
              <Link href="#" color="#3390dd"> Sign Up</Link>
            </Text>
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Signin;
