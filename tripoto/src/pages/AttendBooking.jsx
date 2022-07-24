import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { places } from "../js/Travel";
import Para from "../components/Para";
import Travel from "../components/Travel";
import { useNavigate } from "react-router-dom";
import {
  Flex,
  Box,
  Image,
  Text,
  Spacer,
  Heading,
  Divider,
  Highlight,
} from "@chakra-ui/react";
import Form from "../components/Form";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "../css/booking.module.css";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "blue" }}
      onClick={onClick}
    />
  );
}

const Booking = (amount) => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(places[params.id - 1]);
  }, []);
  //   console.log(data);
  const params = useParams();

  // console.log(places[params.id-1])

  return (
    <div>
      <Navbar />
      <br />
      <Box width="90%" margin="auto">
        <Flex fontSize="14px">
          <Image
            width="16px"
            src={"https://cdn1.tripoto.com/assets/2.9/img/logo/mini-logo.png"}
          />
          <Text> {"> "} </Text>
          <Text color="blue">Tour Packages </Text>
          <Text> {"> "} </Text>
          <Text>{data.name}</Text>
        </Flex>
        <br />
        <Flex>
          <Box width="60%">
            <Slider {...settings}>
              {places.map((item) => (
                <div className={styles.card}>
                   <div className={styles.cardtop}>
                    <Image src={item.sliderimg} />
                  </div>
                </div> 
               ))} 
            </Slider>
          </Box>
          <Box
            //   border="1px solid red"
            width="30%"
            marginLeft="50px"
            borderRadius="8px"
            boxShadow="0 0 3px rgb(0 0 0 / 25%)"
            // right="70.5"
            // // left="0"
            // position="fixed"
            // overflow-y="scroll"
            // overflow-x="hidden"
          >
            <Form amount={data.price1} />
            {/* <Form>
              {places.map((item) => (
                <div className={styles.card}>
                  <div className={styles.cardtop}>
                    <p amount={item.price}></p>
                  </div>
                </div>
              ))}
            </Form> */}
          </Box>
        </Flex>

        <Box width="60%">
          <Heading as="h4" size="lg" textAlign="left">
            {data.name}
          </Heading>
          <Flex marginTop="10px">
            <Image
              w={"30px"}
              borderRadius={"50px"}
              src={
                "https://cdn1.tripoto.com/media/filter/mss/img/2165009/UserPhoto/1628574904_tripoto_s_mindful_retreats.jpg"
              }
            />
            <p>{data.info}</p>
            <Image
              w={"20px"}
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <Spacer />
            <Image
              width="20px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <a href="tel:[08046162990]">
              {" "}
              <Heading
                as="h4"
                _hover={{
                  color: "blue",
                }}
                size="md"
                color="red"
                className="tele"
              >
                08046162990
              </Heading>{" "}
            </a>
          </Flex>
          <br />
          <Divider />
          <Flex>
            <Heading as="h4" size="md" textAlign="left" marginTop="8px">
              Rating: 5.0
            </Heading>
            <Image
              width="40px"
              height="40px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <Image
              width="40px"
              height="40px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <Image
              width="40px"
              height="40px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <Image
              width="40px"
              height="40px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
            <Image
              width="40px"
              height="40px"
              src={
                "data:image/jpeg;base64,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"
              }
            />
          </Flex>
          <Flex>
            <Heading as="h4" size="md" textAlign="left">
              {/* <Highlight 
                query={["3D-2N", "4D-2N"]}
                styles={{
                  px: "2",
                  py: "1",
                  rounded: "full",
                  bg: "teal.100",
                }}
              > */}
              {data.days}
              {/* </Highlight> */}
            </Heading>
            <Spacer />
            <Heading as="h3" size="lg">
              {data.price}
            </Heading>
          </Flex>
          <Heading as="h4" size="sm" textAlign="left" color="#9197a3">
            Location
          </Heading>
          <Heading as="h4" size="sm" textAlign="left" marginTop="8px">
            {data.location}
          </Heading>
          <Heading
            marginTop="10px"
            as="h4"
            size="sm"
            textAlign="left"
            color="#9197a3"
          >
            Highlights
          </Heading>
          <Flex>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425505_meals.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Meals
                </Heading>
              </Flex>
            </Box>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425508_sightseeing.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Sightseeing
                </Heading>
              </Flex>
            </Box>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1555425508_homestay.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Homestay
                </Heading>
              </Flex>
            </Box>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388046_hill_station.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Hill Station
                </Heading>
              </Flex>
            </Box>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388052_nature.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Nature
                </Heading>
              </Flex>
            </Box>
            <Box marginTop="8px" marginRight="20px">
              <Flex>
                <Image
                  width="20px"
                  src="https://cdn1.tripoto.com/media/filter/tst/img/2/Image/1592388084_wellness.png"
                />
                <Heading as="h4" size="sm" textAlign="left">
                  Wellness
                </Heading>
              </Flex>
            </Box>
          </Flex>
          {/* //////////////////////// */}

          <Divider marginTop="30px" marginBottom="20px" />
          <Heading as="h4" size="lg" textAlign="left">
            Overview
          </Heading>
          <Para/>
        </Box>
        
      </Box>
      <Travel/>
      <br/>
      <Footer/>
    </div>
  );
};

export default Booking;
