import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiDocker } from 'react-icons/di';





import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { FaFigma,
         FaLinux,
 
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";



function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col> */}
      <Col xs={4} md={2} className="tech-icons">
        <DiDocker />
      </Col>

    </Row>
  );
}

export default Toolstack;