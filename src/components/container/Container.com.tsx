import React from "react";
import * as S from "./styles";
import { Welcome } from "../welcome/Welcome";
import { Performance } from "../performance/Performance";
import { Navv } from "../Nav/Nav";
import {
  Carddata,
  FacesData,
  PerData,
  BottomBigPic,
  smallPic,
  data,
  Navdata,
  WelcomeData,
  PerformanceData,
  alternate,
} from "./../../pages/Config";
export function Container() {
  return (
    <S.SContainer>
      <Navv alternate={alternate} data={data} Navdata={Navdata} />
      <Welcome
        alternate={alternate}
        Carddata={Carddata}
        BottomBigPic={BottomBigPic}
        smallPic={smallPic}
        WelcomeData={WelcomeData}
      />
      <Performance
        alternate={alternate}
        FacesData={FacesData}
        Perdata={PerData}
        PerformanceData={PerformanceData}
      />
    </S.SContainer>
  );
}
