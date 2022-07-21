import React from 'react'
import styles from "../css/creator.module.css";
import { 
    Heading,
    Text,
    Flex,
    Image,
    Box,
    Grid,
 } from '@chakra-ui/react';
const Creator = () => {
  return (
    <div >
        <br />
      <Heading fontWeight={600} textAlign="left" marginLeft="80px" width="90%">
      In the Spotlight: Tripoto Creators of the Month
      </Heading>
      <Text fontSize="18px" textAlign="left" marginLeft="80px" width="90%">
      Tripoto Family is a community of travel content creators who create stunning photo blogs, engaging reels and videos as well as informative articles. Here are the most promising creators of the month who took us on a beautiful journey across India and the world through their content. Kudos to Tripoto's best creators for May 2022!
      </Text>
      <br/>
        <Grid className="img" display="flex" margin="auto" width="90%" gridGap={"25px"} height="500px" >
        <Image borderRadius={"5px"} src={"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797228_9.jpg"} />
        <Image borderRadius={"5px"} src={"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797266_8.jpg"} />
        <Image borderRadius={"5px"} src={"https://cdn1.tripoto.com/media/filter/tst/img/2215463/Image/1657797979_10_1.jpg"} />
        </Grid>
    </div>
  )
}

export default Creator