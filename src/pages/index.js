import React from "react"
import { Link } from "gatsby"
import { Box, Flex, Heading } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

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

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Flex
      sx={{flexDirection: "row"}}
    >
      <Box
        sx={{
          mt: [0, 2]
        }}
      >
        <Heading>Welcome</Heading>
        <Box
         sx={{
           mr: 1
         }}
        >
          <p>
            This website is a work in progress with the intentions of practicing responsive web design and also showing off some of my projects. 
          </p>
          <p>
            If you are interested in seeing some of my academic projects click on the Project header. If you are interested in me as a person hop onto interests.
          </p>
          <p>
            If you are feeling crazy hop into dev mode and adjust the screen size for a couple devices or toggle your os darkmode.
          </p>
        </Box>
        
      </Box>  
      <HeadShotImage/>
    </Flex>
  </Layout>
)

export default IndexPage