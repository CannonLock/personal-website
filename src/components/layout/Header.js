/** @jsx jsx */
import { Link } from "gatsby"
import { useState } from "react"
import { Heading, jsx } from 'theme-ui'
import { Box, Button, Flex } from 'rebass'

import SideBar from "./Sidebar"
import links from "../../data/link"

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
          mb: 'auto',
          ml: 2,
          mr: 2,
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

const HomeLink = () => {
                        
  return (
    <Heading 
      sx={{
        fontSize: 5,
        pl: 2,
        mt: 'auto',
        mb: 'auto'
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
  )
}

const MenuButton = ({ toggleFunction }) => {
  return (
    <Box
      sx = {{
        ml : 'auto',
        display : ['block', 'none', 'none'],
      }}
    >
      <Button
        sx = {{
          mr: 2,
          mt: `auto`,
          mb: `auto`,
          bg: "highlight",
          borderColor: `text`,
          borderWidth: 2,
          borderStyle: `solid`,
          fontSize: [3, 4, 4],
          pt: 0,
          pb: 1,
          pr: 2,
          pl: 2
        }}
        onClick={() => toggleFunction()}
      >
        |||
      </Button>
    </Box>
    
  )
  
}

const MenuList = () => {
  return (
    <Flex 
      sx = {{
        ml: `auto`,
        mt : 'auto',
        mb : 'auto',
        display: ['none', 'flex', 'flex'],
      }}
    >
      {
        links.map( ( l, i ) => <NavLink key={i.toString()} link={l['path']}>{l['name']}</NavLink>)
      }
    </Flex>
  )
}

const Header = ( props ) => {

  const [barWidth, setBarWidth] = useState("0px");

  const toggleSideBar = () => {
    barWidth === "0px" ? setBarWidth("200px") : setBarWidth("0px");
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
          ml: [0, 2, 2],
          mr: [0, 2, 2],
          borderRadius: 10,
          borderBottomRightRadius: 10,
          pt: 1,
          pb: 1,
          bg:`highlight`,
        }}
      >
        <HomeLink isMain={props.isMain}/>
        <Flex 
          sx={{
            flexGrow : 1,
            alignItems: 'flex-end'
          }}
        >
          <MenuButton toggleFunction={toggleSideBar}/>
          <MenuList/>
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
