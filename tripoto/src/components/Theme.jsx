import React from 'react';
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset
  } from '@chakra-ui/core';
  import { useColorMode, Box, IconButton } from '@chakra-ui/core';

const Theme = () => {
    const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
          <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <Box textAlign="right" py={4} mr={12}>
      <IconButton
        icon={colorMode === 'light' ? 'moon' : 'sun'}
        onClick={toggleColorMode}
        variant="ghost"
      />
    </Box>
      </ColorModeProvider>
    </ThemeProvider>
    </div>
  )
}

export default Theme