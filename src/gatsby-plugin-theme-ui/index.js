/** @jsx jsx */
import dark from "../../node_modules/@theme-ui/preset-deep/src/index"
import light from "../../node_modules/@theme-ui/preset-swiss/src/index"

// To switch themes just switch preset-<theme> above
const theme = () => {
  
  let t = {
    useColorSchemeMediaQuery : true,
    colors : {
      ...dark.colors,
      modes : {
        light : { 
          ...light.colors 
        },
        dark : {
          ...dark.colors
        }
      }
    },
    fontSize : dark.fontSizes,
    fontWeights : dark.fontWeights,
    fonts : dark.fonts,
    lineHeights : dark.lineHeights,
    prism : dark.prism,
    styles : dark.styles,
    textStyles : dark.textStyles
  }

  return (t)
}

export default theme;