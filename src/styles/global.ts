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
    font-weight: ligther;
  }
  @font-face {
    font-family: 'Circular';
    src: url('/fonts/CircularMedium.ttf');
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
  @font-face {
    font-family: 'LibreFranklin';
    src: url('/fonts/LibreFranklin-Medium.ttf');
    font-weight: 300;
  }
   @font-face {
    font-family: 'LibreFranklin';
    src: url('/fonts/LibreFranklin-Regular.ttf');
    font-weight: bolder;
  }
   @font-face {
    font-family: 'LibreFranklin';
    src: url('/fonts/LibreFranklin-SemiBold.ttf');
    font-weight: 600;
  }  
  @font-face {
    font-family: 'LibreFranklin';
    src: url('/fonts/LibreFranklin-Bold.ttf');
    font-weight: bold;
  }
  @font-face {
    font-family: 'LibreFranklin';
    src: url('/fonts/LibreFranklin-ExtraBold.ttf');
    font-weight: normal;
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
    font-family: 'LibreFranklin';
    background-color: black;
  }
`
