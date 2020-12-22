/** @jsx jsx */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Flex, Box } from 'rebass'
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { jsx } from "theme-ui"

import ListCard from "./ListCard"

const List = ( data ) => {
  return(
    data.map(( listItem ) => {
      return(
        <ListCard
          image={listItem}
        />
      )
    })
  )
}