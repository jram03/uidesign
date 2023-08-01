import React from 'react'
import * as S from './styles'
import { Col, Row, Stack } from 'react-bootstrap';
import { Carddata } from './Card';
import styled from 'styled-components'
import CountUp from 'react-countup';
interface CardProps{
    count : number;
    option : string;  
}

export function Card({count,option} : CardProps){
    return<>
        {/* <S.Card className='d-flex flex-column justify-content-center align-items-center'>

            <div><S.H>{count}</S.H></div>
            <div><h6>{option}</h6></div>
            
            
        </S.Card> */}
        <S.StyledCard>
        
      <strong><S.StyledCount prefix='+' suffix='K' start={0} end={count} duration={5}/></strong>
      <div className="card__body">{option}</div>
      <span>View {option}</span>
    </S.StyledCard>
    </>
}
export function Cardd(){
    return <>
        <S.Carddiv className='d-flex flex-wrap justify-content-evenly'>
            {Carddata.map(i=>Card({count:i.count,option:i.option}))}
        </S.Carddiv>
    </>
}