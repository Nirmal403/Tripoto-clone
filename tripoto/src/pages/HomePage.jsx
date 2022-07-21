import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';
import India from '../components/India';
import Mindful from '../components/Mindful';
import Inthespot from '../components/Inthespot';
import Findbestplaces from '../components/Findbestplaces';
import Plan from '../components/Plan';
import Check from '../components/Check';
import Travel from '../components/Travel';
import Creator from '../components/Creator';
import Guides from '../components/Guides';
import Watch from '../components/Watch';
import Footer from '../components/Footer';
const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <India/>
      <Mindful/>
      <Inthespot/>
      <Findbestplaces />
      <Plan/>
      <Check/>
      <Travel/>
      <Creator/>
      <Guides/>
      <Watch/>
      <Footer/>
      </div>
  )
}

export default HomePage