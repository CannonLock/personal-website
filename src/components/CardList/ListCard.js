import React, { useState } from "react"
import { Box, Flex, Heading, Text, Card } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"

import SEO from "../seo"
import Layout from "../layout/Layout"
import TextContainer from "../TextContainer"

const Tag = ( props ) => {
  const [hover, setHover] = useState(true);

  return(
    <Box
      sx={{
        mr: 2,
        pl: 2,
        pr: 2,
        bg: 'secondary',
        borderRadius: 15,
      }}
    >
      <Text
        sx={{
          color: 'background'
        }}
      >
        {props.tag}
      </Text>
    </Box>
  )
}

const TagContainer = ( props ) => {
  return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      {props.children}
    </Box>
  )
}

const ListCard = ( props ) => {

  const {
    title,
    image,
    alt,
    description,
    tags
 } = props;

  return (
    <Card
      sx={{
        bg: 'highlight',
        pt: 2,
        pl: 3,
        pr: 3,
        pb: 2,
        m: 'auto',
        mt: 3,
        mb: 3,
        minWidth: "250px",
        height: "auto",
        borderRadius: 30,
        boxShadow: '2px 2px 20px 0px black'
      }}
    >
      <Heading
        sx={{
          fontSize: 5,
          pb: 1,
          textAlign: 'center'
        }}
      >
        {title}
      </Heading>
      <TagContainer>
        {
          tags.map((cardTag) => {
            return (<Tag tag={cardTag} key={cardTag} ></Tag>)
          })
        }
      </TagContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Box
          sx = {{
            bg: 'primary',
            pt: "20px",
            pl: "20px",
            pr: "20px",
            pb: "20px",
            m: 'auto',
            mt: 2,
            minWidth: "250px",
            width: "250px", 
            height: "auto",
            borderRadius: 30
          }}
        >
          <Img
            fluid={image} 
            alt={alt}>
          </Img>
        </Box>
        <Text
          sx={{
            display: ['none', 'flex', 'flex'],
            fontSize: 4,
            ml: 3
          }}
        >
          {description}
        </Text>
      </Box>
    </Card>
  )


}

export default ListCard;