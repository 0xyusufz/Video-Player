import React, { useState } from 'react'
import {Box, Button, Heading,Text} from '@chakra-ui/react'
import v1 from '../assets/videos/v1.mp4'
import v2 from '../assets/videos/v2.mp4'
import v3 from '../assets/videos/v3.mp4'
import v4 from '../assets/videos/v4.mp4'
import v5 from '../assets/videos/v5.mp4'
import v6 from '../assets/videos/v6.mp4'
import v7 from '../assets/videos/v7.mp4'


const Videos = () => {
  const videoArr =[v1,v2,v3,v4,v5,v6,v7]
  const [videosrc, setvideosrc] = useState(videoArr[0])
  const [head, sethead] = useState(1)
  return (
    <Box display={"flex"} flexDirection={["column","row"]} h={["auto","100vh"]} > 
      <Box display="flex" flexDirection="column" gap="4" w={"full"} h={"100%"} >
        <video controls autoPlay loop muted src={videosrc} style={{width:"100%",height:"80%",objectFit:"cover"}} /> 
        <Box display="flex" flexDirection="column" gap="4" alignItems={"flex-start"} p={"8"} w={"full"} h={"30%"} overflowY={["auto","auto"]}>
          <Heading>Sample Videos {head}</Heading>
          <Text>This is a sample video for testing and demo. this is called a description
          </Text>
        </Box>
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={"6"} w={["full","xl"]} p={"8"} spacing={"8"} overflowY={"auto"}>
        {videoArr.map(function(elem,idx){
          console.log(elem)
          return <Button variant={"ghost"} onClick={()=>{setvideosrc(elem),sethead(idx+1)}} colorScheme={"purple"} w={"full"}>Lecture {idx+1}</Button>
        })}
      </Box>
    </Box>
  )
}

export default Videos
