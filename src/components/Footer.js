import React from "react"
import { Link } from "@theme-ui/components"
import { Heading, jsx } from 'theme-ui'
import { Box, Text } from "rebass"

const ContactLink = ( props ) => {
  return (
    <Box>
      <Text
        sx={{
          textAlign:"center",
          fontSize:[1, 2]
        }}
      >
        {props.contact + ": "}
        <Link 
          sx={{color: 'text', textDecoration: 'underline'}}
          href={props.contactLink}
        >
          {props.contactText}
        </Link>
      </Text>
    </Box>
  )
}

const Footer = ( props ) => {

  return (
    <Box
      sx = {{
        borderTopWidth: "2px",
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderBottomWidth: 0,
        borderStyle: "solid",
        borderColor: "highlight",
        pt: 2,
        mt: 3,
        mr: 2,
        ml: 2,
      }}
    >
      <Heading
        sx={{
          fontSize:[2,3],
          color:'primary',
          textAlign:"center"
        }}
        
      >
        Contact Information
      </Heading>
      <ContactLink 
        contact="Email" 
        contactText="lockannon@gmail.com" 
        contactLink="lockannon@gmail.com"
      />
      <ContactLink 
        contact="Github" 
        contactText="CannonLock" 
        contactLink="https://github.com/CannonLock?tab=repositories"
      />
      <ContactLink 
        contact="LinkedIn" 
        contactText="cannonlock" 
        contactLink="linkedin.com/in/cannonlock"
      />
    </Box>
  )
  
}

export default Footer;