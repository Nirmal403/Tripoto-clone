import React from 'react'
import { 
  Text,
  Heading,
  Image,
   Box,     
} from '@chakra-ui/react';
import {useDispatch} from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { places } from '../js/Travel';
import styles from "../css/travel.module.css";

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


const Travel = () => {
  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // dots: true,
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
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  // const dispatch = useDispatch();
  return (
    <div >
          <br/>
          <Heading fontWeight={600} textAlign="left" marginLeft="80px"
          width="90%">
          Travel and Learn with Tripoto's Mindful Retreats
          </Heading>
         <div class={styles.App}>

          <Slider {...settings}>
          {places.map((item)=>(
              <div className={styles.card}>
              <div className={styles.cardtop}>
                <img src={item.imgUrl} alt={item.title} />
                <h4>{item.package}</h4>
                <h1>{item.name}</h1>
                
              </div>
              <div className={styles.cardbottom}>
                <p>{item.info}</p>
              </div>
          </div>
          ))}
          
          </Slider>
         
         </div>
      </div>
  )
}

export default Travel;