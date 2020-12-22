/** @jsx jsx */
import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { Flex, Box } from 'rebass'
import { jsx } from "theme-ui"

import Header from "./Header"
import Footer from "./Footer"

const Layout = ( props ) => {

  // Get the passed in animation
  let Animation = props.animation;
  
  return (
    <>
      {props.animation && <Animation/>}
      <Header/>
      <Box
        sx={{
          mr: `auto`,
          ml: `auto`,
          mt: "60px",
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
          <main>{props.children}</main>
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
