import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/Seo"
import Layout from "../../components/layout/Layout"
import TextContainer from "../../components/TextContainer"

const ProjectPage = () => {

  return (
    <Layout>
    <SEO title="Projects" />
    <Heading
      sx = {{
        fontSize : 5
      }}
    >
      Project Page
    </Heading>
    <TextContainer>
      <p>
        A collection of all the projects that are atleast somewhat tangential to my studies.
      </p>
    </TextContainer>
  </Layout>
  )
  
      
}

export default ProjectPage;