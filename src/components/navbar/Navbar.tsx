import React from "react";

import * as S from './styles'
import { ChartPieIcon, UserGroupIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Col, Image, Row } from "react-bootstrap";
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
export function Navbar(){

    const section =(name : string)=>{
        return(
        <div className="d-flex">
            <div className="me-2">
        <S.Icon>
            {(name === "Dashboard")?<ChartPieIcon />:<></> }
            {(name === "Products")?<Inventory2OutlinedIcon />:<></> }
            {(name === "Customers")?<UserGroupIcon />:<></> }
            {(name === "Reviews")?<ReviewsOutlinedIcon />:<></> }
            {(name === "Settings")?<Cog8ToothIcon />:<></> }
        </S.Icon></div>
        <div>{name}</div>
        </div>)
    }



    return<>
    <S.SContainer>
        <Row className="d-flex flex-column">
        <Col className="mb-4">
            <S.IImage src="https://e0.pxfuel.com/wallpapers/1023/205/desktop-wallpaper-hidden-face-boy-thumbnail.jpg" height={80} width={80} roundedCircle />
        </Col>
        <S.CCol className="mt-4">{section("Dashboard")}</S.CCol>
        <S.CCol className="mt-4">{section("Products")}</S.CCol>
        <S.CCol className="mt-4">{section("Customers")}</S.CCol>
        <S.CCol className="mt-4">{section("Reviews")}</S.CCol>
        <S.CCol className="mt-4">{section("Settings")}</S.CCol>
        </Row>
    </S.SContainer>
    
    </>
}