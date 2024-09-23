import React from "react";
import { Container } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: "40vh" }}>
    <Card className="quote-card-view text-center">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "center" }}>
            Hi There, I am <span className="green">Rajesh</span>
            , Final year Undergrad Student.
            <br />
            Driven deep into <span className="green">AI/DL Development</span> and <span className="green">NLP/LLM's & Generative AI.</span>
            <br />
            Computer Science Engineering from TamilNadu-MACET
            <br />
            My goal is to acquire comprehensive knowledge, hands-on experience in order to find innovative solutions.
            <br />
            <br/>
            Apart from coding, I Love! doing :
          </p>
          <ul style={{ textAlign: "center", listStyle: "none", padding: 0 }}>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Reading
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Planning & Managing
            </li>
            <li className="about-activity" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <ImPointRight style={{  marginRight: "10px" }}/> Travelling
            </li>
          </ul>
          <br/>

          <p style={{ color: "rgb(155 126 17)" }}>
You can always do more than you know-Never STOP Learning!{" "}
          </p>
          <footer className="blockquote-footer">-Rajesh</footer>
        </blockquote>
      </Card.Body>
    </Card>
    </Container>
  );
}

export default AboutCard;