/** @jsx jsx */
import { Link } from "gatsby"
import { useState } from "react"
import { Heading, jsx } from 'theme-ui'
import { Box, Button, Flex, NavLink } from 'theme-ui'

import links from "../../data/link"

const Header = () => {
  return(
    <Flex as="nav">
      <NavLink variant="sub_nav"  href="/" p={2}>
        <h2>Cannon Lock</h2>
      </NavLink>
      <NavLink variant="sub_nav" href="/about" p={2}>
        <h4>About</h4>
      </NavLink>
      <NavLink variant="sub_nav" href="/projects" p={2}>
        <h4>Projects</h4>
      </NavLink>
    </Flex>
  )
}

export default Header;
