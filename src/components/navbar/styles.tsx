import styled from 'styled-components'
import { Container,Image,Col } from 'react-bootstrap'
export const Title = styled.h1`
color : blue;
text-align : center
`

export const SContainer = styled(Container)`
    display : flex;
    // justify-content : center;
    align-items : center;
    background-color : violet;
    height : 90vh;
    width :140vh;
    border-radius : 7%;
    padding-top : 5%
    padding-bottom : 5%
    padding-left : 4%;
    position :fixed

`
export const CCol = styled(Col)`
    text-align : start
`

export const Icon = styled.div`
    height : 22px;
    width : 22px;
`

export const IImage = styled(Image)`
    object-fit: contain;
    background-color : white
`