import React, { useState } from "react"
import { Box, Flex, Heading, Text } from "rebass"

const InputContainer = ( props ) => {

  return(
    <Box
      sx={{
        color: 'text',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        ':focus-within': {
          transition: 'color .2s', 
          color: 'secondary',
          borderColor: 'secondary',
        }
      }}
    >
      {props.children}
    </Box>
  )
}

export default InputContainer;