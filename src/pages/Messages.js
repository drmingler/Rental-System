import React from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import UserPlaceholderIcon from "../assets/img/user_mock_big.svg";

const MessageItem = ({ text }) => {
  return (
    <li className="col-md-12 my-2">
      <Paper className="chat-wrapper" elevation={0}>
        <Row>
          <Col md={5} className="owner-of-chat">
            <div className="landlord-photo-wrapper">
              <img src={UserPlaceholderIcon} alt="Tenant" />
            </div>
            <div className="chat-info">
              <span className="name">Emmanuel David</span>
              <span className="address">
                Strausberger Pl. 9, 10243 Berlin, Germany
              </span>
            </div>
          </Col>
          <Col md={7}>
            <div>
              <span>{text.substring(0, 150) + "... "}</span>
              <span className="message-date">2:00 PM, 03/23/21</span>
            </div>
          </Col>
        </Row>
      </Paper>
    </li>
  );
};
const Messages = () => {
  let text =
    "Centrally located between Mitte, Prenzlauer Berg, Friedrichshain und Kreuzberg (all within 10 min walk). I sublet my furnished apartment since I am going away for 1 to 2 years. Minimum contract duration is 1 year. 2 bedrooms (or 1 bedroom + 1 living room), 1 bathroom, toilet / bathroom separate, huge kitchen, washer. no balcony but amazing view. Ideal for single or couple. Also included: TV, mountain bike, dishwasher, 5.1 surround sound system, my plants :) Room 1: - Huge Sofa - sleep sofa / bed - TV - Surround Sound - Whiteboard - Desk Room 2: - Huge bed - Small desk - Small sofa - Closet Kitchen: - Fridge / Freezer - Oven - Dishwasher - Table for 4 - Sofa (it's amazing to have a sofa in the";
  return (
    <div>
      <MobileNavbar />
      <NavBar fixed={true} />
      <section className="message-page">
        <Container>
          <ul className="row">
            <MessageItem text={text} />
            <MessageItem text={text} />
            <MessageItem text={text} />
            <MessageItem text={text} />
          </ul>
        </Container>
      </section>
    </div>
  );
};
export default Messages;
