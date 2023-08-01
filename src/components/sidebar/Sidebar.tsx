import { useState } from 'react';
import { Alert,Image, Stack,Navbar as Navv, Nav, NavItem, Row } from 'react-bootstrap';
import icon from './../../icons/menu.png'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import * as S from './styles'
import {Col,Container} from 'react-bootstrap'
import { ChartPieIcon, UserGroupIcon, Cog8ToothIcon } from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ReviewsOutlinedIcon from '@mui/icons-material/ReviewsOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import LogoutIcon from '@mui/icons-material/Logout';
export function Sidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
        {(name === "Logout")?<LogoutIcon />:<></>}
    </S.Icon></div>
    <S.Text>{name}</S.Text>
    </div>)
}

  return (
    <>
    <div className='d-lg-none'>
      <Button variant='secondary' onClick={handleShow}>
        <Bars3Icon />
      </Button>
    </div>
        <S.Container lg={2}>
        <S.Ofcanvas show={show} onHide={handleClose} responsive='lg'>
            <Offcanvas.Header closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
            <Stack gap={3} className='d-flex justify-content-center align-items-space-between'>
                <Col className="mb-4">
                <S.IImage src="https://e0.pxfuel.com/wallpapers/1023/205/desktop-wallpaper-hidden-face-boy-thumbnail.jpg" height={80} width={80} roundedCircle />
                </Col>
                <S.CCol className="mt-2">{section("Dashboard")}</S.CCol>
                <S.CCol className="mt-2">{section("Products")}</S.CCol>
                <S.CCol className="mt-2">{section("Customers")}</S.CCol>
                <S.CCol className="mt-2">{section("Reviews")}</S.CCol>
                <S.CCol className="mt-2">{section("Settings")}</S.CCol>
                <S.CCol className="auto"></S.CCol>
                <S.CCol className="mt-4">{section("Logout")}</S.CCol>
            </Stack>
            </Offcanvas.Body>
            
        </S.Ofcanvas>
        </S.Container>
    </>
  );
}

