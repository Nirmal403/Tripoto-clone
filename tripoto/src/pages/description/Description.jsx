import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { places } from "../../js/Spotlight";
import {
  carddetails,
  cardimg1,
} from "../../js/description js/jsFindbestplaces";
import { Trek } from "../../js/Trek";
import Inthespot from "../../components/Inthespot";
import styles from "../../css/inthespot.module.css";
import { Heading, Box, Image, Text, Divider } from "@chakra-ui/react";
import Watch from "../../components/Watch";
import Plan from "../../components/Plan";
import Travel from "../../components/Travel";
import Footer from "../../components/Footer";
const Description = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  useEffect(() => {
    setData(places[params.id - 1]);
    setData1(Trek[params.id - 1]);
    setData2(carddetails[paramse.id-1])
  }, []);
  //   console.log(data);
  const params = useParams();
 const paramse = useParams();
  return (
    <div maxWidth={"1200px"} margin="auto" minWidth="400px">
      <Navbar />
      <Box width="90%" marginTop="20px" margin="auto">
        <Heading textAlign={"left"} marginTop="10px" margin="auto">
          {data.info}
        </Heading>
      </Box>
  
      {Trek.map((item) => (
        <div>
          <div>
            <Box width="80%" marginTop="40px" margin="auto">
              <Image marginTop="40px" src={item.picUrl} />
            </Box>
            <Box width="80%" margin="auto">
              <Text
                width="90%"
                marginTop="40px"
                fontSize="18px"
                textAlign={"left"}
              >
                {item.details}
              </Text>
            </Box>
            <Divider width="90%" marginTop="20px" marginBottom="20px" />
            <Heading
              as="h4"
              size="md"
              width="80%"
              textAlign={"left"}
              marginTop="20px"
              margin="auto"
            >
              {item.heading}
            </Heading>
          </div>
        </div>
      ))}


      <Watch />
      <Plan />
      <Travel />
      <Footer />
    </div>
  );
};

export default Description;
