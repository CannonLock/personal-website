/** @jsx jsx */
import { Flex, Box } from 'rebass'
import { jsx } from "theme-ui"

const TextContainer = ( props ) => {

  console.log(props)
  return (
    <Box
      sx = {{
        ...props.sx
      }}
    >
      {props.children}
    </Box>
  )
}

export default TextContainer;