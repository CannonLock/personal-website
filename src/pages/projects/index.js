import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../../components/Seo"
import Layout from "../../components/layout/Layout"
import TextContainer from "../../components/TextContainer"
import ListCard from "../../components/CardList/ListCard"


const ProjectPage = () => {

  const data = useStaticQuery(graphql`
    query {
      allProjectDataJson {
        edges {
          node {
            tags
            title
            description
            alt
            slug
            image {
              childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const cardData = data.allProjectDataJson.edges;
  console.log(cardData)

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

    <ListCard
      title={cardData[0].node.title}
      image={cardData[0].node.image.childImageSharp.fluid}
      alt={cardData[0].node.alt}
      description={cardData[0].node.description}
      tags={cardData[0].node.tags}
    />

  </Layout>
  )
  
      
}

export default ProjectPage;