import Swimmer from "../Gifs/WideAlphaRightSize.gif"
import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import SEO from "../components/Seo"

const SwimBoy = () => {
  const [visible, setVisible] = useState("visible");

  return (
    <Box
      sx={{
        width: "100%",
        overflowX: "hidden"
      }}
    >
      <Box
        sx={{
          position: "absolute",
          height: "auto",
          width: "auto",
          zIndex: 1000,
          visibility: visible,
          left: ["-30px", "-30px", "-10px", "-20px"]
        }}
        onClick={() => setVisible("hidden")}
      >
        <img src={Swimmer} />
      </Box>
    </Box>
    
  )
}

const MainPage = () => {

  return (
    <>
      <SEO title="Home" />
      <SwimBoy/>
      <Flex
        sx={{
          flexDirection: "row",
          position: "relative"
        }}
      >
        <Box
          sx={{
            mt: [0, 2]
          }}
        >
          <Box
          sx={{
            mr: 1
          }}
          >
            <Heading>Welcome</Heading>
            <p>
              This website is a constant work in progress with the intentions of practicing responsive web design and also showing off some of my projects. As you can see on the queue there is alot left to do but that is life.
            </p>
            <p>
              Page To-Do Queue:
            </p>
            <ul>
              <li>
                <Text sx={{textDecoration:"line-through"}}>Make Breast Stroke Animation</Text>
              </li>
              <li>
                About
              </li>
              <li>
                Projects
              </li>
              <li>
                Interests
              </li>
            </ul>
          </Box>
        </Box>  
      </Flex>
    </>
  )
}

export default MainPage;