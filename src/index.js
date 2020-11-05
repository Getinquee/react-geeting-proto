import React from "react";
import { render } from "react-dom";
import { Rnd } from "react-rnd";
import ReactPlaceholder from "react-placeholder";
import "react-placeholder/lib/reactPlaceholder.css";
import {
  TextBlock,
  MediaBlock,
  TextRow,
  RectShape,
  RoundShape
} from "react-placeholder/lib/placeholders";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const style = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};
const awesomePlaceholder = (
  <div className="placeholder">
    <Container>
      <Row>
        <Col xs={12} md={12} lg={12}>
          <p className="justify-content-center">Profile Info</p>
        </Col>
      </Row>
      <Row>
        <Col xs={3} md={3} lg={3}>
          <RoundShape
            color="grey"
            style={{
              width: 50,
              height: 50,
              marginLeft: 10,
              marginBottom: 120,
              position: "inherit"
            }}
          />
        </Col>
        <Col xs={9} md={9} lg={9}>
          <span>----------- profile picture </span>
        </Col>
      </Row>
      <Row>
        <Col xs={3} md={3} lg={3}>
          <p>Details------------</p>
        </Col>
        <Col xs={9} md={9} lg={9}>
          <TextBlock
            rows={5}
            color="grey"
            style={{ width: 170, height: 20, marginLeft: 10 }}
          />
        </Col>
      </Row>
    </Container>
  </div>
);

const App = () => (
  <Rnd
    style={style}
    default={{
      x: 0,
      y: 0,
      width: 300,
      height: 300
    }}
  >
    <ReactPlaceholder customPlaceholder={awesomePlaceholder} />
  </Rnd>
);

render(<App />, document.getElementById("root"));
