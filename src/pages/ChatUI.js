import React, {useEffect, useRef, useState} from "react";
import MobileNavbar from "../components/MobileNavBar";
import NavBar from "../components/NavBar";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import UserPlaceholderIcon from "../assets/img/user_mock_big.svg";
import TextField from "@material-ui/core/TextField";

const MyMessage = ({ children, date }) => {
  return (
    <Col lg={{ offset: 3, span: 9 }} className="my-message">
      <div className="message">
        <span>{children}</span>
      </div>
      <span className="message-date">{date}</span>
    </Col>
  );
};

const OtherUserMessage = ({ children, date }) => {
  return (
    <Col lg={9} className="other-user-message">
      <div className="message">
        <span>{children}</span>
      </div>
      <span className="message-date">{date}</span>
    </Col>
  );
};

const ChatUI = () => {
  const innerRef = useRef();
  const [message, setMessage] = useState({});

  useEffect(() => {
    innerRef.current.scrollIntoView({ behavior: "smooth" });
  }, []);

  function handleChange(e) {
    const { name, value } = e.target;
    setMessage({ ...message, [name]: value });
  }

  return (
    <div>
      <MobileNavbar />
      <NavBar fixed={true} />
      <section>
        <div className="message-scroll-area">
          <Paper elevation={0} className="landlord-card">
            <div>
              <div className="landlord-photo-wrapper">
                <img src={UserPlaceholderIcon} alt="landlord" />
              </div>
              <span className="name">Emmanuel David</span>
              <span className="link-to-apartment">
                Strausberger Pl. 9, 10243 Berlin, Germany
              </span>
            </div>
          </Paper>
          <Container>
            <Row>
              <Col lg={{ offset: 4, span: 8 }}>
                <Row>
                  <MyMessage date={"2:00 PM, 03/23/21"}>
                    Hi
                  </MyMessage>
                  <OtherUserMessage date={"2:00 PM, 03/23/21"}>
                    Hello
                  </OtherUserMessage>
                  <MyMessage date={"2:00 PM, 03/23/21"}>
                    Centrally located between Mitte, Prenzlauer Berg,
                    Friedrichshain und Kreuzberg (all within 10 min walk). I
                    sublet my furnished apartment since I am going away for 1 to
                    2 years. Minimum contract duration is 1 year. 2
                  </MyMessage>
                  <OtherUserMessage date={"2:00 PM, 03/23/21"}>
                    Centrally located between Mitte, Prenzlauer Berg,
                    Friedrichshain und Kreuzberg (all within 10 min walk). I
                    sublet my furnished apartment since I am going away for 1 to
                    2 years. Minimum contract duration is 1 year. 2
                  </OtherUserMessage>
                  <MyMessage date={"2:00 PM, 03/23/21"}>
                    Centrally located between Mitte, Prenzlauer Berg,
                    Friedrichshain und Kreuzberg (all within 10 min walk). I
                    sublet my furnished apartment since I am going away for 1 to
                    2 years. Minimum contract duration is 1 year. 2
                  </MyMessage>
                  <OtherUserMessage date={"2:00 PM, 03/23/21"}>
                    Centrally located between Mitte, Prenzlauer Berg,
                    Friedrichshain und Kreuzberg (all within 10 min walk). I
                    sublet my furnished apartment since I am going away for 1 to
                    2 years. Minimum contract duration is 1 year. 2
                  </OtherUserMessage>

                  <div ref={innerRef} />
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <div className="message-box-container">
        <Container>
          <Row>
            <Col md={{ offset: 3, span: 7 }}>
              <form className="chat-form">
                <TextField
                  value={message.message}
                  className="chat-input"
                  placeholder="Type your message here"
                  fullWidth
                  multiline
                  rowsMax={4}
                  name="message"
                  onChange={handleChange}
                />
                <button className={`send-btn ${message.message && "active"}`}>
                  Send
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default ChatUI;
