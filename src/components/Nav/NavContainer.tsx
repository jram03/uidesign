import React, { useState } from "react";
import * as S from "./styles";
import {
  ChartPieIcon,
  UserGroupIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/outline";
import { Bars3Icon } from "@heroicons/react/24/outline";
import ReviewsOutlinedIcon from "@mui/icons-material/ReviewsOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";
import LogoutIcon from "@mui/icons-material/Logout";
import Offcanvas from "react-bootstrap/Offcanvas";
interface NavProps {
  id: number;
  name: string;
}
interface NavdataProps {
  profile: {
    img: string;
    height: number;
    width: number;
  };
  closeicon: string;
  closeiconsize: string;
  footer: {
    name: string;
  };
}
export const Nav = ({
  alternate,
  data,
  Navdata,
}: {
  alternate: string;
  data: NavProps[];
  Navdata: NavdataProps;
}) => {
  const [show, setShow] = useState(false);

  const _handleClose = () => setShow(false);

  const _section = (name: string) => {
    return (
      <S.hover className="d-flex">
        <div className="me-2">
          <S.Icon>
            {name === "Dashboard" ? <ChartPieIcon /> : <></>}
            {name === "Products" ? <Inventory2OutlinedIcon /> : <></>}
            {name === "Customers" ? <UserGroupIcon /> : <></>}
            {name === "Reviews" ? <ReviewsOutlinedIcon /> : <></>}
            {name === "Settings" ? <Cog8ToothIcon /> : <></>}
            {name === "Logout" ? <LogoutIcon /> : <></>}
          </S.Icon>
        </div>
        <S.Text>{name}</S.Text>
      </S.hover>
    );
  };
  const _midContent = () => {
    return (
      <>
        {data.map(({ id, name }: NavProps) => (
          <S.CCol className="mt-4">{_section(name)}</S.CCol>
        ))}
      </>
    );
  };
  const _totalContent = () => {
    return (
      <>
        <S.ImgContainer>
          <S.IImage
            alt={alternate}
            src={Navdata.profile.img}
            height={Navdata.profile.height}
            width={Navdata.profile.width}
            roundedCircle
          />
        </S.ImgContainer>
        <S.MidContainer>{_midContent()}</S.MidContainer>
        <S.Footer>
          <S.CCol>{_section(Navdata.footer.name)}</S.CCol>
        </S.Footer>
      </>
    );
  };
  const _clickHandler = () => {
    setShow(true);
  };
  return (
    <>
      <S.Containerside show={show} onHide={_handleClose}>
        <Offcanvas.Header>
          <Offcanvas.Title></Offcanvas.Title>
          <S.Buttonclose onClick={_handleClose}>
            <img
              alt={alternate}
              src={Navdata.closeicon}
              width={Navdata.closeiconsize}
              height={Navdata.closeiconsize}
            />
          </S.Buttonclose>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <S.Containerdiv>{_totalContent()}</S.Containerdiv>
        </Offcanvas.Body>
      </S.Containerside>
      <S.Containersm>
        <S.Bbutton onClick={() => _clickHandler()}>
          <Bars3Icon
            height={Navdata.closeiconsize}
            width={Navdata.closeiconsize}
          />
        </S.Bbutton>
      </S.Containersm>
      <S.Container>{_totalContent()}</S.Container>
    </>
  );
};
