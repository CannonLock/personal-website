/** @jsx jsx */
import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Flex, Box } from 'rebass'
import { Heading, jsx } from "theme-ui"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {

  return (
    <>
      <Header/>
      <Box
        sx={{
          mr: `auto`,
          ml: `auto`,
          mt: ["65px", "80px"],
          maxWidth: `960px`,
        }}
      > 
        <Flex
          sx={{
              position: `relative`,
              ml: 2,
              mr: 2,
            }}
        >
          <main>{children}</main>
        </Flex>
      </Box>
      <Footer/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
