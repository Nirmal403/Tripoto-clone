import React from 'react'
import {Flex,Box,Image,Heading,Text} from "@chakra-ui/react";
const Mindful = () => {
  return (
    <div>
        <Flex  margin="auto" width="1280px" >
            <Box width='300px' >
                <Flex gap="40px">
                    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192329_aa.png"/>
                    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192307_cc.png"/>
                    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192273_bb.png"/>
                    <Image src="https://cdn1.tripoto.com/media/filter/tst/img/311219/Image/1657192344_dd.png"/>
                </Flex>
            </Box>
            
        </Flex>
    </div>
  )
}

export default Mindful