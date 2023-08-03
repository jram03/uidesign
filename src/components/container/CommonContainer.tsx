import React from "react";
import * as S from "./styles";
import { Welcome } from "../welcome/MiddleContainer";
import { Performance } from "../performance/PerformanceContainer";
import { Nav } from "../Nav/NavContainer";
import {
  CardData,
  FaceData,
  ProgressData,
  LImgContainer,
  SImgContainer,
  data,
  Navdata,
  WelcomeData,
  PerformanceData,
  alternate,
  CountupData,
} from "../../pages/ConfigFile";
export function Container() {
  return (
    <S.SContainer>
      <Nav alternate={alternate} data={data} Navdata={Navdata} />
      <Welcome
        alternate={alternate}
        CardData={CardData}
        LImgContainer={LImgContainer}
        SImgContainer={SImgContainer}
        WelcomeData={WelcomeData}
        CountupData={CountupData}
      />
      <Performance
        alternate={alternate}
        FaceData={FaceData}
        Progressdata={ProgressData}
        PerformanceData={PerformanceData}
      />
    </S.SContainer>
  );
}
