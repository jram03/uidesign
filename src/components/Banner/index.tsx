import React from 'react'
import * as S from './styles'
import { Col, Row } from 'react-bootstrap'
import carticon from './../../icons/carticon.png'
export function Banner(){
    return <>
        <S.Container className='h2'>
            <Row>
                <Col className='col-8 p-2'>
                    <S.h>Good Job!</S.h>
                    <S.pp>You have over 20 000 visitors in the last 10 days. Keep it up</S.pp>
                </Col>
                <S.Ccol >
                <img style={{position:'absolute',bottom : '0.03rem'}} src={carticon} height='150rem' width='150rem'/>
                </S.Ccol>

            </Row>
                
        </S.Container>
    </>
}