/** @jsx jsx */
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Heading, jsx } from "theme-ui"
import { Box, Button, Flex } from "rebass"

const NavListItem = ( props ) => {
  return (
    <li
      sx={{
        color: `highlight`,
        listStyleType: `none`,
        pl: 0
      }}        
    >
      <Link
        to={props.link}
        sx={{
          textDecoration: `none`,
          fontSize: 3,
          color: `highlight`,
        }}
      >
        {props.children}
      </Link>
    </li>
  )
}

const SideBar = ( props ) => {
  return (
    <Box
      sx={{
        bg: `secondary`,
        m: 2,
        mt: 0,
        mr: 0,
        p: `2 2`,
        borderRadius:10,
        '@media screen and (min-width: 641px)': {
          display: `none`,
        },
        position: `absolute`,
        top: 0,
        right: 0,
        overflow: `hidden`,
        maxWidth: props.width,
        transition: `max-width .5s`,
        zIndex: 1000,
      }}
    >
      <ul
        sx={{
          pl: 3,
          pr: 3
        }}
      >
        <NavListItem link="/about">About</NavListItem>
        <NavListItem link="/projects">Projects</NavListItem>
        <NavListItem link="/interests">Interests</NavListItem>
      </ul>
    </Box>
  )
}

export default SideBar;
