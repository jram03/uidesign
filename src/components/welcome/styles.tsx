import styled from 'styled-components'
import {Row,Col} from 'react-bootstrap'
import bg from './../../icons/bg.png'
import { keyframes } from 'styled-components'

const move = keyframes`
    0% {
        padding: 10rem;
    }

    // 50% {
    // width: 50%;
    // }
  
   
    100% {
        padding: 3rem;
    }
    
    `
export const Container = styled(Col)`
    // display : flex;
    // position : relative;
    // height : 90vh;
    // width : 50vw;
    background-color : white;
    border-radius : 4rem;
    // border : 5px solid blue;
    // margin-left : 12%;
    // margin-right : 12%
    // padding-top : 3%;
    // border-radius : 7%;
    // @media (max-width: 768px) {
        // width: 90vw;
        // }
        // @media (max-width: 375px) {
            // width: 100vw;
            // }
            animation : ${move} 1s;
            padding : 3rem
`