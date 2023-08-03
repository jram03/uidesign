import React from "react";
import * as S from "./styles";
import { Row, Col } from "react-bootstrap";
import { BellIcon } from "@heroicons/react/24/outline";
 
export function Header() {
  return (
    <div className="b1">
      <Row>
        <Col className="col-9">
          <S.HText>Welcome back, Dan!</S.HText>
          <S.PText>23 Oktober, Friday</S.PText>
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
