import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "theme-ui"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-plugin-image"

import InputContainer from "../InputContainer"

const LeftContainer = ( props ) => {
  return(
    <Box
      sx={{
        ml: 3,
        display: 'flex',
        justifyContent: 'flex-start',
        width: '50%'
      }}
    >
        {props.children}
    </Box>
  )
}

const RightContainer = ( props ) => {
  return(
    <Box
      sx={{
        mr: 3,
        display: 'flex',
        justifyContent: 'flex-end',
        width: '50%'
      }}
    >
        {props.children}
    </Box>
  )
} 

function buildSearchElement( inputElement, setFunction ){

  if(Array.isArray(inputElement)){



  }

}

function renderSearchElements( children, setTransform ){
  
  let childArray = Array.isArray(children) ? children : Array(children);

  childArray.flatMap( (searchEl) => {

    let searchArray = Array.isArray(searchEl) ? searchEl : Array(searchEl);

    return searchArray.flatMap( ( input ) => {
      console.log(input);
    })

  })
}

function createTransformFunction( searchInput ){

}

const SearchBar = ( props ) => {

  // The function that filters and sorts an array
  const [ transform, setTransform ] = useState({});

  return(
    <Flex
      sx={{
        display: 'flex',
        flexDirection: 'row',
        mb: 2
      }}
    >
      <LeftContainer>
      </LeftContainer>
      <RightContainer>
      </RightContainer>
    </Flex>
  )
}

export default SearchBar;