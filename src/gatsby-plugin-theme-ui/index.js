/** @jsx jsx */
import dark from "../../node_modules/@theme-ui/preset-deep/src/index"
import light from "../../node_modules/@theme-ui/preset-swiss/src/index"

// To switch themes just switch preset-<theme>

const theme = () => {
  if (typeof window == `undefined`) {
    return ({})
  } else if(window.matchMedia('(prefers-color-scheme: light)').matches){
    return(
      {
        ...light
      } 
    ) 
  } else {
    return(
      {
        ...dark
      } 
    )
  }
}

export default theme;