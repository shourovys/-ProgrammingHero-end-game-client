import styled, { createGlobalStyle } from "styled-components";
import bg from './images/bg11.png';
import heroBg from './images/heroBg.png';
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;600;800;900&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
`

export const BackGround = styled.section`
  background-image: url(${heroBg});
  top: 0 ;
  right:0;
  left: 0;
  bottom: 0;
  /* background-size: cover; */
  background-repeat: no-repeat;
  background-position: top;
`;

export const FooterBackGround = styled.section`
  background-image: url(${bg});
  top: 0 ;
  right:0;
  left: 0;
  bottom: 0;
  background-size: cover;
  background-color: #512A7D;

  background-repeat: no-repeat;
  background-position: top;
`;

export default GlobalStyle;
