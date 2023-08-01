import styled from 'styled-components'
import { Offcanvas,Col, Image } from 'react-bootstrap'


export const Ofcanvas = styled(Offcanvas)`
    background-color : violet;
    font-color : white;
`

export const CCol = styled(Col)`
    text-align : start
`
export const Icon = styled.div`
    height : 22px;
    width : 22px;
`

export const Text =styled.div`
    font-weight : 700
`

export const IImage = styled(Image)`
    object-fit: contain;
    background-color : white;
    margin-bottom : 20%
`

export const Container = styled(Col)`
    display : flex;
    justify-content : center;
    align-items : center;
    // width : 15%;
    @media (max-width: 768px) {
        width: auto;
    }
    @media (max-width: 1024px) {
        width: auto;
    }
`