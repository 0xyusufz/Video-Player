import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box, Heading, Text } from '@chakra-ui/react'

import Header from './components/Header'



const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
