import React,{ StrictMode } from 'react'
import {ColorModeScript,ChakraProvider,theme} from '@chakra-ui/react';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ColorModeSwitcher from './ColorModeSwitcher'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
      <ColorModeSwitcher/>
      <App />
    </ChakraProvider>
  </StrictMode>,
)
