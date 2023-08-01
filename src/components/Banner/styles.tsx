import { Col } from 'react-bootstrap'
import styled from 'styled-components'
export const Container = styled.div`

    width : 100%;
    border-radius : 1.5rem;
    background-color : #FF7777;
    color : white;
    padding : 3%;
    padding-left : 10%;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);

    @media screen and (max-width : 420px){
        width : 85%;
    }
    
    &:hover{
        cursor : pointer;
        box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    }
    
`
export const h =styled.h1`
    font-size : 1.5rem
`

export const pp = styled.p`
    font-size : 0.75rem
`

export const Ccol = styled(Col)`
    position : relative;
`