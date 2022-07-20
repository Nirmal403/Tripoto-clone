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
      </div>
  )
}

export default HomePage