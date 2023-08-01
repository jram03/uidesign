import React from 'react'
import { Boxx } from './styles'
import * as S from './styles'
import { Col,Stack } from 'react-bootstrap';
import spec from './../../icons/glass.png'
interface BottomProps{
    width : string;
    url : string;
    size : string;
}

export function Bottom(){

    const box = ({width,url,size} : BottomProps)=>{
        return<>
        <Boxx width={width} url={url} size={size}/>
        </>
    }

    return <>
    <S.recentText>Recent Sold</S.recentText>
    <div style={{padding : '0.5rem'}}>
    <S.Rrow >
        <S.RCol >
        {box({ width : '100%' ,url : 'https://assets.ajio.com/medias/sys_master/root/20230721/ioa9/64baa67da9b42d15c968a9ce/-473Wx593H-450149610-white-MODEL.jpg', size : 'cover'})}
        </S.RCol>
        <S.RCol>
        <S.Frow>
        <Col className='d-flex justify-content-center align-items-center' >
        {box({ width : '100%' ,url : 'https://icon-library.com/images/12188-handbag-icon.png' , size : 'contain'})}

        </Col>
        <Col className='d-flex justify-content-center align-items-center' >
        {box({ width : '100%' ,url : 'https://cdn.shopify.com/s/files/1/1555/2045/products/ScreenShot2021-04-06at2.00.06PM_684x.png?v=1684959775', size : 'contain'})}

        </Col>
        </S.Frow>
        <S.Frow>
        <Col style={{marginTop:'1rem'}}>
            <S.bbox>
                <S.h>Dresses</S.h>
                <S.pp>25 items  $3.5k earned</S.pp>
            </S.bbox>
        </Col>
        </S.Frow>
        </S.RCol>
        
    </S.Rrow>
    </div>

    </>
}