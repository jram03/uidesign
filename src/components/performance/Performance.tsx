import React from 'react';
import * as S from './styles';
import { Col, Image, Row, Stack } from 'react-bootstrap';
import { PerData,FacesData } from './PerData';

interface ProgressProps{
    title :string;
    revenue : string;
    orders : string;
    growth : boolean;
    gvalue : string;
}
interface FaceColprops{
    image : string;
    name : string;
}
const faceCol = ({image,name} : FaceColprops) => {
    return(
        <>
                <Col>
                <Stack direction='vertical'><div className='d-flex justify-content-center'>
                <Image height='30rem' width='30rem' src={image} roundedCircle /></div>
                <S.Textxsm style={{textAlign: 'center'}}>{name}</S.Textxsm>
                </Stack>
                </Col>
        </>
    )
}
export function Performance(){

    const faces =() =>{
        return <>
                {FacesData.map(i=>faceCol(i))}                
        </>
    }
    const NewClients =() => {
        return(
            <>
            <S.SpaceRow>
                <Col><S.Textsm>New Clients(21)</S.Textsm></Col>
                <Col className='col-auto'><S.Textxsm>see all</S.Textxsm></Col>
            </S.SpaceRow>
            <S.SpaceRow>
                {faces()}
            </S.SpaceRow>
            </>
        )
    }
    const below=(props : ProgressProps)=>{
        console.log(props.growth)
        let c = (props.growth)?'#198754':'#DC3545';
        let bg =(props.growth)?'#19875450':'#DC354550';
      
        return<>
        <Row>
            
            <Col className='p-2'>
                <S.Textsm>
                <img src='https://img.icons8.com/ios/50/shopping-bag--v1.png' height={15} width ={15}/>

                &nbsp;{props.orders} orders</S.Textsm>
            </Col>
            <Col className='col-4'>
                <S.Box c={c} bg={bg}><S.Textxsm>
                    <img src='https://img.icons8.com/pastel-glyph/64/sales-growth.png'  height={15} width ={15} />
                    &nbsp;&nbsp;{props.gvalue}</S.Textxsm></S.Box>
            </Col>
        </Row>
        </>
    }

    const Progress =(props : ProgressProps) =>{
        return <>
        <S.ProgressBox>
            <Row>
                <Col><S.Textsm>{props.title}</S.Textsm></Col>
                <Col className='col-auto'><S.Textxsmbold>$ {props.revenue}</S.Textxsmbold></Col>
            </Row>
            <Row><Col>
                <S.ProgressLoader>
                    <S.Progress></S.Progress>
                </S.ProgressLoader></Col>
            </Row>
            <Row>{below(props)}</Row>
        </S.ProgressBox>
        </>
    }
    
    return <>
    {/* <div style={{padding : '3%'}}> */}
    <S.Container lg={3} md={4} sm={11}>
        {/* <Stack direction='vertical'> */}
            <S.Text>Performance</S.Text>
            {NewClients()}
            <S.Textsm>Your Progress</S.Textsm>
            <S.ProgressContainer>
                {PerData.map(i=>Progress(i))}
            </S.ProgressContainer>
        {/* </Stack> */}

    </S.Container>
    {/* </div> */}
    </>
}