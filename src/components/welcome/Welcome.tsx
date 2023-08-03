import React from "react";
import * as S from "./styles";
import { Header } from "../Header/Header";
import { Banner } from "../Banner";
import { Cardd } from "../Card/Cardd";
import { Bottom } from "../Bottom/Bottom";
interface WelcomeProps {
  alternate: string;
  Carddata: CarddataProps[];
  BottomBigPic: BottomBigPicProps[];
  smallPic: smallPicProps[];
  WelcomeData: welcomeDataProps;
}

interface CarddataProps {
  id: number;
  count: number;
  option: string;
  slide: string;
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
interface welcomeDataProps {
  header: {
    title: string;
    subtitle: string;
  };
  banner: {
    title: string;
    subtitle: string;
    image: {
      url: string;
      height: string;
      width: string;
    };
  };
  bottom: {
    title: string;
    box: {
      title: string;
      subtitle: string;
    };
  };
}
export function Welcome({
  alternate,
  Carddata,
  BottomBigPic,
  smallPic,
  WelcomeData,
}: WelcomeProps) {
  return (
    <>
      <S.Container lg={6} md={7} sm={11}>
        <Header HeaderData={WelcomeData.header} />
        <Banner alternate={alternate} BannerData={WelcomeData.banner} />
        <Cardd Carddata={Carddata} />
        <Bottom
          alternate={alternate}
          BottomBigPic={BottomBigPic}
          smallPic={smallPic}
          BottomData={WelcomeData.bottom}
        />
      </S.Container>
    </>
  );
}
