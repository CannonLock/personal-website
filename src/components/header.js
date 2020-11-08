/** @jsx jsx */
import { Link } from "gatsby"
import { useState } from "react"
import { Heading, jsx } from 'theme-ui'
import { Box, Button, Flex } from 'rebass'

import SideBar from "./Sidebar"

const DropDown = ( props ) => {

  return(
    <Box
      sx = {{
        float: `left`,
        overflow: `hidden`,
        
      }}
    >
      {props.children}
    </Box>
  )

}

const NavLink = ( props ) => {
  return(
    <Box
      sx={{
        display: `flex`,
        alignItems: `stretch`
      }}
    >
      <Box
        sx={{
          mb:2,
          ml:3,
          mr:3,
          mt: `auto`
        }}
      >
        <Link
          to={props.link}
          sx={{
            color: `text`,
            textDecoration: `none`,
            fontSize: 3
          }}
        >
          {props.children}
        </Link>
      </Box>
    </Box>
  )
}

const Header = ( props ) => {

  const [barWidth, setBarWidth] = useState("0px");

  const toggleSideBar = () => {
    barWidth == "0px" ? setBarWidth("200px") : setBarWidth("0px");
  }

  return(
    <Box
      sx={{
        mb: 2,
        position: 'fixed',
        top: 0,
        right: 0,
        left: 0,
        zIndex: 1000,
      }}
    >
      <Flex
        sx={{
          mb: 0,
          ml: 2,
          mr: 2,
          borderRadius: 10,
          borderBottomRightRadius: 10,
          p: `2 2`,
          bg:`highlight`,
        }}
      >
        <Heading 
          sx={{
            fontSize: ["38px", 6],
            pl: 2,
          }}>
          <Link
            to="/"
            sx={{
              color: `text`,
              textDecoration: `none`,
            }}
          >
            Cannon Lock
          </Link>
        </Heading>
        <Flex sx={{flexGrow:1}}>
          <Box
            sx={{
              ml: `auto`,
              '@media screen and (min-width: 641px)': {
                display: `none`,
              },
              display: `flex`,
              alignItems: `stretch`,
            }}
          >
            <Box
              sx = {{
                mt: `auto`,
                mb: `auto`,
                mr: 2,
                p: "4px"
              }}
            >
              <Button
                sx = {{
                  bg: "highlight",
                  borderColor: `text`,
                  borderWidth: 2,
                  borderStyle: `solid`,
                  fontSize: 4,
                  pt: 0,
                  pb: 0.8,
                  pr: 2,
                  pl: 2
                }}
                onClick={() => toggleSideBar()}
              >
                |||
              </Button>
            </Box>
          </Box>
          <Flex sx = {{
              ml: `auto`,
              '@media screen and (Max-width: 640px)': {
                display: `none`,
              },
              mr: 1,
            }}
          >
            <NavLink link="/about">About</NavLink>
            <NavLink link="/projects">Projects</NavLink>
            <NavLink link="/interests">Interests &#8642;</NavLink>
          </Flex>
        </Flex>
      </Flex> 
      <Box
        sx={{
          position:'relative',
        }}
      >
        <SideBar width={barWidth}/> 
      </Box>
    </Box>

  )
}

export default Header;
