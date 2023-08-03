import React from "react";
import * as S from "./styles";
import { Header } from "../Header/HeaderContainer";
import { Banner } from "../Banner/BannerContainer";
import { CardContainer } from "../Card/CardContainer";
import { Bottom } from "../Bottom/BottomContainer";
interface WelcomeProps {
  alternate: string;
  CardData: CardDataProps[];
  LImgContainer: LImgContainerProps[];
  SImgContainer: SImgContainerProps[];
  WelcomeData: welcomeDataProps;
  CountupData: CountupDataProps;
}

interface CardDataProps {
  id: number;
  count: number;
  option: string;
  slide: string;
}
interface CountupDataProps {
  prefix: string;
  suffix: string;
  start: number;
  duration: number;
}
interface LImgContainerProps {
  id: number;
  width: string;
  url: string;
  size: string;
}
interface SImgContainerProps {
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
  CardData,
  LImgContainer,
  SImgContainer,
  WelcomeData,
  CountupData,
}: WelcomeProps) {
  return (
    <>
      <S.Container lg={6} md={7} sm={11}>
        <Header HeaderData={WelcomeData.header} />
        <Banner alternate={alternate} BannerData={WelcomeData.banner} />
        <CardContainer CardData={CardData} CountupData={CountupData} />
        <Bottom
          alternate={alternate}
          LImgContainer={LImgContainer}
          SImgContainer={SImgContainer}
          BottomData={WelcomeData.bottom}
        />
      </S.Container>
    </>
  );
}
