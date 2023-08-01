import styled from 'styled-components'
import {Col, Row, Stack} from 'react-bootstrap'

import { keyframes } from 'styled-components'

const move = keyframes`
    0% {
        margin-top: 10rem;
    }
  
    100% {
        margin-top: 1rem;
    }
    
    `

    export  const ProgressContainer=styled.div`
    // height : 50%
    margin-top : 1.5rem;
    font-family: 'Nunito', sans-serif;

    `
export const Container = styled(Col)`
    height : 100vh;
    // width : 30vw;
    background-color : #F2BE22;
    margin : 0.7rem;
    border-radius : 3rem;
    padding : 2rem;
    // height : 90%;
    // width : 10%;
    // margin-top : 0.7;
    animation : ${move} 1s;
    @media screen and (max-width : 1024px){
        height : auto;
    }
    // @media screen and (max-width : 768px){
    //     height : auto;
    //     margin-left : 1rem;
    // }
    // @media screen and (max-width : 420px){
    //     margin-left : 1rem;
    // }
    
    
`
export const tdd=styled.td`
    padding-left : 1rem;
    padding-right : 1rem;
`
export const Text = styled.div`
    font-weight : 700;
    font-size : 1.35rem;
    padding-bottom : 0.7rem
    
`

export const Textsm = styled.div`
font-weight : 700;
font-size : 0.85rem

`
export const Textxsm = styled.div`
font-weight : 700;
font-size : 0.65rem

`
export const Textxsmbold = styled.div`
font-weight : 800;
font-size : 0.55rem;
// text-align : right;

`
export const SpaceRow = styled(Row)`
    margin-bottom : 0.7rem;
    flex-wrap : no-wrap;
`
export const Sttack = styled(Stack)`
    justify-content : center;
    align-content : center;
`
export const ProgressBox = styled.div`
    margin-top : 0.7rem;
    border-radius : 1rem;
    // height : auto;
    // width : 100%;
    background-color : white;
    padding : 0.7rem;
      transition: 100ms;
      &:hover{
      transform: scale(1.04, 1.04);
      cursor : pointer;
      }

    

`

export const ProgressLoader = styled.div`
    margin-top : 0.7rem;
    margin-bottom : 0.7rem;
    // transform: translate(-50%, -50%);
    width: 100%;
    background: #F2BE2250;
    height: 10px;
    border-radius: 7px;
`
const loading_44 = keyframes`
    0% {
        width: 0%;
    }

    // 50% {
    // width: 50%;
    // }
  
    100% {
        width: 100%;
    }
    
    `

export const Progress = styled.div`
    width: 80%;
    height: 10px;
    border-radius: 7px;
    background: #F2BE2270;
    transition: 1s;
    animation: ${loading_44} 2s cubic-bezier(.4,1.01,1,1) infinite;
`
interface Boxprop{
    c : string;
    bg : string;
}
export const Box = styled.div<Boxprop>`
    width : 4rem;
    height : 1.7rem;
    border-radius : 0.5rem;
    padding : 0.5rem;
    text-align : center;
    
    background-color:${prop => prop.bg};
    color : ${prop => prop.c};

    
`