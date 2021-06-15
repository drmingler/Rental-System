import React from "react";
import {MobileNavbar, NavBar} from "../components/LayoutComponents/index";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import UserPlaceholderIcon from "../assets/img/user_mock_big.svg";
import {useSelector} from "react-redux";
import {formatDateTime} from "../helpers/utils";
import {useHistory} from "react-router-dom";

const MessageItem = ({ chat }) => {
  let history = useHistory();
  const { id } = useSelector(state => state.users.currentUser);
  const { message, sender, receiver, created_at } = chat;

  const handleRedirect = () => {
    let redirectId = id === sender ? receiver.id : sender;
    let location = {
      pathname: `/messages/chat/${redirectId}`,
      state: { receiver: receiver }
    };
    return history.push(location);
  };
  return (
    <li className="col-md-12 my-2" onClick={() => handleRedirect()}>
      <Paper className="chat-wrapper" elevation={0}>
        <Row>
          <Col md={5} className="owner-of-chat">
            <div className="landlord-photo-wrapper">
              <img src={receiver.avatar || UserPlaceholderIcon} alt="Tenant" />
            </div>
            <div className="chat-info">
              <span className="name">{`${receiver.firstName} ${receiver.lastName}`}</span>
              {receiver.address && (
                <span className="address">{receiver.address}</span>
              )}
              {!receiver.address && (
                <span className="address">
                  Gwarimpa Pl. 9, 10243 Abuja, Nigeria
                </span>
              )}
            </div>
          </Col>
          <Col md={7}>
            <div>
              <span>
                {message.length > 150
                  ? message.substring(0, 150) + "... "
                  : message}
              </span>
              <span className="message-date">{formatDateTime(created_at)}</span>
            </div>
          </Col>
        </Row>
      </Paper>
    </li>
  );
};
const Messages = () => {
  const { lastChats } = useSelector(state => state.chat);
  return (
    <div>
      <MobileNavbar />
      <NavBar fixed={true} />
      <section className="message-page">
        <Container>
          <ul className="row">
            {lastChats.map((chat, idx) => (
              <MessageItem chat={chat} key={idx} />
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
};
export default Messages;
