import React from "react";
import * as S from "./styles";
import { Header } from "../Header/Header";
import { Banner } from "../Banner";
import { Cardd } from "../Card/Cardd";
import { Bottom } from "../Bottom/Bottom";
interface WelcomeProps {
  Carddata: CarddataProps[];
  BottomBigPic: BottomBigPicProps[];
  smallPic: smallPicProps[];
}

interface CarddataProps {
  id: number;
  count: number;
  option: string;
}
interface BottomBigPicProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
interface smallPicProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
export function Welcome({ Carddata, BottomBigPic, smallPic }: WelcomeProps) {
  return (
    <>
      <S.Container lg={6} md={7} sm={11}>
        <Header />
        <Banner />
        <Cardd Carddata={Carddata} />
        <Bottom BottomBigPic={BottomBigPic} smallPic={smallPic}/>
      </S.Container>
    </>
  );
}
