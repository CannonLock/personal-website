import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

import InputContainer from "../../components/InputContainer"

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

  console.log(props.children)

  return(
    <Flex
      sx={{
        display: 'flex',
        flexDirection: 'row',
        mb: 2
      }}
    >
      <LeftContainer>
        {Array(props.children[0]).map( leftChild => {
          Array(leftChild).map( inputElement => {
            console.log(leftElement)
          })
        })}
      </LeftContainer>
      <RightContainer>
        {Array( props.children[1] ).map( rightChild => {
          Array( rightChild ).map( inputElement => {
            console.log(rightElement)

          })
        })}
      </RightContainer>
    </Flex>
  )
}

export default SearchBar;