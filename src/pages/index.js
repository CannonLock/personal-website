import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import MainPage from "./Main"

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

const IndexPage = ( props ) => (
  <Layout>
    <MainPage/>
  </Layout>
)

export default IndexPage;