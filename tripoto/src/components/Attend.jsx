import React ,{useEffect} from "react";
import {
  Text,
  Flex,
  Heading,
  Image,
  Button,
  Box,
  Highlight,
  Spacer,
} from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
// import { useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { places } from "../js/Attend";
import styles from "../css/attend.module.css";
import { Link } from "react-router-dom";
// import Booking from "../pages/Booking";
import { useNavigate } from "react-router-dom";


const Attend = () => {



  useEffect(() => {
    window. scrollTo(0, 0)
    }, [])



  const settings = {
 
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <div>
      <br />
      <Heading fontWeight={600} textAlign="left" marginLeft="80px" width="90%">
      Attend Online Experiences: Tripoto's Exclusive Online Workshops
      </Heading>
      <div class={styles.App}>
        <Slider {...settings}>
          {places.map((item) => (
            <div className={styles.card}>
              <div className={styles.cardtop}>
                <img src={item.imgUrl} alt={item.title} />
                <h4>{item.package}</h4>
                <h1>{item.name}</h1>
              </div>
              <div className={styles.cardbottom}>
              

                <Flex>
                  <Text fontSize={"18px"} color="black" fontWeight={600}>
                    {item.price}
                  </Text>
                  <Spacer />
                  <Button
                    onClick={() => {
                     
                      navigate(`/booking/${item.id}`);
                      window.location.reload(); 
                    //  handlechange();
                     
                      // return <Link href="/booking/:id"></Link>
                    }}
                    marginTop="10px"
                    marginBottom="10px"
                    border="1px solid teal"
                    color="teal"
                    bg={"#fff"}
                  >
                    {item.book}
                  </Button>
                </Flex>
                <Divider orientation="horizontal" />
                <Flex marginTop="10px">
                  <Image
                    w={"30px"}
                    borderRadius={"50px"}
                    src={
                      "https://cdn1.tripoto.com/media/filter/mss/img/1999587/UserPhoto/1594379927_dp2.jpg"
                    }
                  />
                  <p> {item.info}</p>
                  <Image
                    w={"20px"}
                    src={
                      "data:image/jpeg;base64,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"
                    }
                  />
                </Flex>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Attend;
