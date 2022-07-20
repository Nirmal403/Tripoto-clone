import React from 'react';
import Navbar from '../components/Navbar';
import { Box } from '@chakra-ui/react';
import India from '../components/India';
import Mindful from '../components/Mindful';
import Inthespot from '../components/Inthespot';

const HomePage = () => {
  return (
    <div>
      <Navbar/>
      <India/>
      <Mindful/>
      <Inthespot/>
      </div>
  )
}

export default HomePage