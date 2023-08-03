import React from "react";
import * as S from "./styles";
import { Navbar } from "../navbar/Navbar";
import { Welcome } from "../welcome/Welcome";
import { Sidebar } from "../sidebar/Sidebar";
import { Performance } from "../performance/Performance";
import { Navv } from "../Nav/Nav";
import { Container as Cont } from "react-bootstrap";
import { Carddata, FacesData, PerData , BottomBigPic, smallPic , data } from "./../../pages/Config"
export function Container() {
 
  console.log(BottomBigPic)
  return (
    <S.SContainer>
      <Navv data={data}/>
      <Welcome Carddata={Carddata} BottomBigPic={BottomBigPic} smallPic={smallPic} />
      <Performance FacesData={FacesData} Perdata={PerData} />
    </S.SContainer>
  );
}
