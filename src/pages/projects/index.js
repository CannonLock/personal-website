import React, { useState } from "react"
import { Box, Flex, Heading, Text, Button } from "rebass"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import {
  Label,
  Input,
  Select,
  Textarea,
  Radio,
  Checkbox
} from '@rebass/forms'

import SEO from "../../components/Seo"
import Layout from "../../components/layout/Layout"
import TextContainer from "../../components/TextContainer"
import List from "../../components/CardList/List"
import SearchBar from "../../components/CardList/SearchBar"
import InputContainer from "../../components/InputContainer"

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

      <SearchBar>
        <>
          <>
            <Label 
              htmlFor="title"
              sx={{
                fontWeight: 'bold',
              }}
            >
              Title
            </Label>
            <Input
              id="title"
              type="filter"
              name="title"
              sx={{
                borderStyle: 'hidden hidden solid hidden',
                borderWidth: 2,
                fontSize: 2,
                color: 'text',
                p:1,
                ":focus" : {
                  outline : 0,
                  borderColor: 'secondary'
                }
              }}
            />
          </>
        </>
        <>
          <>
            <Button
              sx={{
                borderColor: 'text',
                border: 'solid',
                borderWidth: 2,
                borderRadius: 5,
                bg: 'transparent',
                ":focus": {
                  outline: 'none',
                  color: 'secondary',
                  transition: 'color .05s',
                }
              }}
            >
              Surprise Me!
            </Button>
          </>
        </>
        
      </SearchBar>
      <List
        data={cardData}
      />
    </Layout>
  )
  
      
}

export default ProjectPage;