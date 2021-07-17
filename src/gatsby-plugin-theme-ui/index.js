/** @jsx jsx */
import { polaris as light, deep as dark } from '@theme-ui/presets'

// Okay
const theme = {
  breakpoints: ['40em', '52em', '64em'],
  useColorSchemeMediaQuery : true,
  colors : {
    ...light.colors,
    modes : {
      light : {
        ...light.colors
      },
      dark : {
        ...light.colors
      }
    }
  },
  fontSize : dark.fontSizes,
  fontWeights : dark.fontWeights,
  fonts : dark.fonts,
  lineHeights : dark.lineHeights,
  prism : dark.prism,
  styles : dark.styles,
  textStyles : dark.textStyles,
  flexs : {
    container : {
      width : ["960px",	"1140px",	"1320px"]
    }
  },
  links: {
    sub_nav: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }
}

export default theme;