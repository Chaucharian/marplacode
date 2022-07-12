import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  @font-face {
    font-family: 'Akira';
    src: url('/fonts/AkiraSuperBold.otf');
    font-weight: bolder;
  }
  @font-face {
    font-family: 'Akira';
    src: url('/fonts/AkiraBold.otf');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Akira';
    src: url('/fonts/AkiraOutline.otf');
    font-weight: lighter;
  }
  @font-face {
    font-family: 'Circular';
    src: url('/fonts/CircularLight.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Light.ttf');
    font-weight: lighter;
  }
  @font-face {
    font-family: 'Raleway';
    src: url('/fonts/Raleway-Bold.ttf');
    font-weight: bold;
  }
  
  * {
   box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Akira';
    background-color: black;
  }
`
