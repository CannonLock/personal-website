import React, { useState } from "react"
import { Link } from "gatsby"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Swimmer from "../images/WideAlphaRightSize.gif"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

const HeadShotImage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "WebsiteHeadshotCroppeder.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Box
      sx = {{
        bg: 'primary',
        pt: "15px",
        pl: "20px",
        pr: "20px",
        pb: "20px",
        mb: "auto",
        minWidth: ["180px", "250px"],
        width: ["180px", "250px"], 
        height: "auto",
        borderRadius: 30,
      }}
    >
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt="Headshot"
      />
    </Box>
  )
}

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

const IndexPage = ( props ) => (
  <Layout>
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
  </Layout>
)

export default IndexPage