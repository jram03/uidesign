import { Row,Col } from 'react-bootstrap';
import styled from 'styled-components'


interface boxProps{
    width : string;
    url : string;
    size : string;
}

export const FCol =styled(Row)`
`

export const HCol = styled(Col)`
`
export const recentText = styled.div`
font-weight : 700;
font-size : 1.35rem;
padding-bottom : 1.2rem

`
export const Boxx = styled.div<boxProps>`
    height : 100%;
    width : ${props=>props.width};
    background-image : url(${props=>props.url});
    // background-color : grey;
    text-align : center;
    border-radius : 20px;
    // padding-top : 3%;
    background-position: center;
    background-repeat : no-repeat;
    background-size : ${props=>props.size};
    // margin-left : 3%
    // margin-right : 3%
    
    // margin-bottom : 2%;
    


`
export const RCol = styled.div`
    width : 45vw;
    padding : 0.5rem;
    @media screen and (max-width : 396px){
        width : 90vw;
    }
    
`
export const Rrow = styled.div`
    display : flex;
    // flex-wrap : wrap;
    // padding : 3rem;
    height : 30vh;
    // margin-top : 5%;
    width : 100%;
    justify-content : center;
    @media screen and (max-width : 396px){
        height : 70vh;
        flex-wrap : wrap;
    }

`
export const Frow = styled(Row)`
    height : 50%;
    // margin-top : 5%;
    width : 100%;

`

export const bbox =styled.div`
    border-radius : 1rem;
    background-color : #FCAEAE;
    height : 80%;
    width : 100%;
    // margin : 2%;
    color : white;
    padding-bottom : 10%;
    padding-left : 5%;
    padding-top : 3%;
    @media screen and (max-width : 1024px){
    text-align : center;
    // padding : 1%;
    
}
`
export const h =styled.h1`
font-size: 1.2rem;
font-weight : 700;
`

export const pp = styled.label`
font-size: 0.75rem;
font-weight : 500;
`