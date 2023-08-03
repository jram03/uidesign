import React, { useState } from "react";
import * as S from './styles'
import { ChartPieIcon, UserGroupIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
import { Button, Col, Row, Stack } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import closeicon from './../../icons/close.png'
interface NavProps{
    id : number,
    name : string,
}
export const Navv=({data} : {data : NavProps[]})=>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [flg,setFlg] = useState(1);
    const section =(name : string)=>{
        return(
        
        <S.hover className="d-flex">
            <div className="me-2">
        <S.Icon>
            {(name === "Dashboard")?<ChartPieIcon />:<></> }
            {(name === "Products")?<Inventory2OutlinedIcon />:<></> }
            {(name === "Customers")?<UserGroupIcon />:<></> }
            {(name === "Reviews")?<ReviewsOutlinedIcon />:<></> }
            {(name === "Settings")?<Cog8ToothIcon />:<></> }
            {(name === "Logout")?<LogoutIcon />:<></>}
        </S.Icon></div>
        <S.Text>{name}</S.Text>
        </S.hover>)
    }
    const MidContent =() =>{
        return <>
        {data.map(({id,name} : NavProps)=><S.CCol className="mt-4">{section(name)}</S.CCol>)}

        </>
    }
    const TotalContent = () =>{
        return <>
        <S.ImgContainer>
        <S.IImage src="https://t4.ftcdn.net/jpg/03/26/98/51/360_F_326985142_1aaKcEjMQW6ULp6oI9MYuv8lN9f8sFmj.jpg" height={90} width={90} roundedCircle />
        </S.ImgContainer>
        <S.MidContainer>
        {MidContent()} 
        </S.MidContainer>
        <S.Footer>
        <S.CCol>{section("Logout")}</S.CCol>
        </S.Footer>
        </>
    }
    const clickHandler = () =>{
        console.log('clicked');
        setShow(true)
    }
    return <>
        <S.Containerside show={show} onHide={handleClose}>
        <Offcanvas.Header><Offcanvas.Title></Offcanvas.Title>
        <S.Buttonclose onClick={handleClose}><img width="30" height="30" src={closeicon}/></S.Buttonclose></Offcanvas.Header>
        <Offcanvas.Body>
        <S.Containerdiv>
        {TotalContent()}
        </S.Containerdiv>
        </Offcanvas.Body>
      </S.Containerside>
    <S.Containersm>
       <S.Bbutton onClick={()=>clickHandler()}><Bars3Icon height={30} width={30}/></S.Bbutton>
    </S.Containersm>
    <S.Container>
        {TotalContent()}
    </S.Container>
    </>
}