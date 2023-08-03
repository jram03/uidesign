import React from "react";
import * as S from "./styles";
import { Col, Row } from "react-bootstrap";
import carticon from "./../../icons/carticon.png";
export const Banner = () => {
  return (
    <>
      <S.Container className="h2">
        <Row>
          <Col className="col-8 p-2">
            <S.h>Good Job!</S.h>
            <S.pp>
              You have over 20 000 visitors in the last 10 days. Keep it up
            </S.pp>
          </Col>
          <S.Ccol>
            <S.Img
              src={carticon}
              height="150%"
              width="90%"
              z-index="2"
            />
          </S.Ccol>
        </Row>
      </S.Container>
    </>
  );
}
