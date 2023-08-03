import styled from 'styled-components'
import {Col} from 'react-bootstrap'
export const HText = styled.h3`
    // font-size : 24px
    font-weight : 800;
    font-family: 'Nunito', sans-serif;

`
export const PText = styled.p`
    // font-size : 15px
    font-weight : 600;
    font-family: 'Nunito', sans-serif;


`
export const dot = styled.div`
    color: white;
    position:relative;
    height : 0.5rem;
    width : 0.5rem;
    right: -0.55rem;
    // top : '0.001rem';
    bottom:1.5rem;
    font-size: 0.7rem;    
    transform :translate(25%,25%);
`
export const Icon = styled.div`
    height : 22px;
    width : 22px;
`

export const Ccol = styled(Col)`
    position : relative;
`