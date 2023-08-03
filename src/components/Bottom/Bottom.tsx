import React from "react";
import { Boxx } from "./styles";
import * as S from "./styles";
import { Col, Stack } from "react-bootstrap";
import spec from "./../../icons/glass.png";
interface BottomProps {
  width: string;
  url: string;
  size: string;
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
export const Bottom = ({BottomBigPic, smallPic} :{BottomBigPic : BottomBigPicProps[], smallPic : smallPicProps[]}) => {
  const box = ({ width, url, size }: BottomProps) => {
    return (
      <>
        <Boxx width={width} url={url} size={size} />
      </>
    );
  };

  return (
    <>
      <S.recentText>Recent Sold</S.recentText>
      <div style={{ padding: "0.5rem" }}>
        <S.Rrow>
            {BottomBigPic.map((i) => <S.RCol>{box({ width: i.width, url: i.url, size: i.size })}</S.RCol>)}
          
          <S.RCol>
            <S.Frow>
                {smallPic.map((i) => <Col className="d-flex justify-content-center align-items-center">{box({ width: i.width, url: i.url, size: i.size })}</Col>)}
              
            </S.Frow>
            <S.Frow>
              <Col style={{ marginTop: "1rem" }}>
                <S.bbox>
                  <S.h>Dresses</S.h>
                  <S.pp>25 items $3.5k earned</S.pp>
                </S.bbox>
              </Col>
            </S.Frow>
          </S.RCol>
        </S.Rrow>
      </div>
    </>
  );
};
