import { Col, Image, Row, Offcanvas } from "react-bootstrap";
import { styled } from "styled-components";

export const Container = styled.div`
    width : 20%;
    height : 100vh;
    background-color : #7A316F;
    display : block;
    @media screen and (max-width: 1024px) { 
        display:none;
        // width : 5%;
      }
`
export const Containersm = styled.div`
      display : none;
      position : initial;
      @media screen and (max-width: 1024px) {
        display:block;
    }
`
export const Bbutton = styled.div`
    border : none;
    background-color : white;
    
`
export const hover = styled.div`
&:hover {
    text-shadow : 1px 1px 6px yellow;
    cursor : pointer;
  }
`
export const Containerside = styled(Offcanvas)`
width : 90%;
background-color : #7A316F;
display : block;      
position : absolute;
height : 110vh;
color : white;
`
export const Containerdiv = styled.div`
width : 90%;
background-color : #7A316F;
display : block;      
position : absolute;

height : 100vh;
`
export const ImgContainer = styled.div`
    height : 30%;
    // border : 1px solid white;
    display : flex;
    justify-content : center;
    align-items : center;
    padding-top : 7rem;

  
`
export const MidContainer = styled.div`
    height : 40%;
    // border : 1px solid white;
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding : 25%;
    // align-items : center;
    // padding-top : 7rem
`
export const Footer = styled.div`
    height : 28%;
    // border : 1px solid white;
    display : flex;
    justify-content : center;
    align-items : center;
    // padding-left : 3%;

`
export const Icon = styled.div`
    height : 22px;
    width : 22px;
    

`

export const Text =styled.div`
    font-weight : 700;
    
        `

export const CCol = styled.div`
    text-align : start;
    color : white;
    
`

export const IImage = styled(Image)`
    object-fit: cover;
    background-color : white;
    margin-bottom : 20%;

`
export const Buttonclose = styled.button`
border : none;
background-color : #7A316F;
`