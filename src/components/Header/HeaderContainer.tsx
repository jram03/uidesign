import React from "react";
import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import { BellIcon } from "@heroicons/react/24/outline";
 interface HeaderProps {
  title : string,
  subtitle : string
 }
export function Header({HeaderData}:{HeaderData:HeaderProps}) {
  return (
    <div className="b1">
      <Row>
        <Col className="col-9">
          <S.HText>{HeaderData.title}</S.HText>
          <S.PText>{HeaderData.subtitle}</S.PText>
        </Col>
        <Col className="col-auto"></Col>
        <Col className="col-auto">
          <S.Icon>
            <BellIcon />
            <S.dot className="rounded-circle bg-danger d-flex justify-content-center align-items-center"></S.dot>
          </S.Icon>
        </Col>
      </Row>
    </div>
  );
}
