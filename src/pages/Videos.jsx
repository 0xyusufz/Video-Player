import React from 'react'
import {Box} from '@chakra-ui/react'


const Videos = () => {
  return (
    <Box display={"flex"} flexDirection={["column","row"]} h={"100vh"} gap="6"> 
      <Box display="flex" flexDirection="column" gap="4">
        <video controls controlslist={"nodownload"} src="/" style={{width:"100%"}} /> 
      </Box>
      <Box>

      </Box>
    </Box>
  )
}

export default Videos
