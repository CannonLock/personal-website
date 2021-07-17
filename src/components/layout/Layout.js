/** @jsx jsx */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Flex, Box } from 'theme-ui'
import { jsx } from "theme-ui"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ( props ) => {
  
  return (
    <Flex
      sx={{
        minHeight: "100vh",
        flexDirection: "column",
        backgroundColor: "background"
      }}
    >
      <Header/>
      <Flex variant="container">
        <main>{props.children}</main>
      </Flex>
      <Footer/>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
