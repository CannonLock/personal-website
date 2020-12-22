import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"



const SearchBar = ( props ) => {

  // The function that filters and sorts an array
  const [ transformFunction, setTransformFunction] = useState((a) => a);

  console.log(props.children)

  return(
    <Flex>
      {props.children}
    </Flex>
  )
}