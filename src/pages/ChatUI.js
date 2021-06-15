import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Link from "@material-ui/core/Link";
import NavBar from "../components/LayoutComponents/NavBar";
import UserPlaceholderIcon from "../assets/img/user_mock_big.svg";
import {MobileNavbar} from "../components/LayoutComponents/index";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import {handleMessageSend} from "../store/chatSlice";
import useChat from "../hooks/useChat";
import {chatInitialValues, chatValidator} from "../validators/formValidators";
import {useChatForm} from "../hooks/useChatForm";
import {formatDateTime} from "../helpers/utils";

const MyMessage = ({ children, date }) => {
  return (
    <Col lg={{ offset: 3, span: 9 }} className="my-message">
      <div className="message">
        <span>{children}</span>
      </div>
      <span className="message-date">{formatDateTime(date)}</span>
    </Col>
  );
};

const OtherUserMessage = ({ children, date }) => {
  return (
    <Col lg={9} className="other-user-message">
      <div className="message">
        <span>{children}</span>
      </div>
      <span className="message-date">{formatDateTime(date)}</span>
    </Col>
  );
};

const ChatUI = () => {
  const {
    connection,
    dispatch,
    innerRef,
    state,
    conversations,
    currentUser
  } = useChat();
  let receiver = state && state.receiver;

  function SendMessage(message) {
    dispatch(handleMessageSend(connection, message));
  }

  const {
    handleSubmit,
    handleBlur,
    values,
    touched,
    errors,
    handleChange
  } = useChatForm(SendMessage, chatInitialValues, chatValidator);

  return (
    <div>
      <MobileNavbar />
      <NavBar fixed={true} />
      <section>
        <div className="message-scroll-area">
          <Paper elevation={0} className="landlord-card">
            <div>
              <div className="landlord-photo-wrapper">
                <img
                  src={receiver ? receiver.avatar : UserPlaceholderIcon }
                  alt="landlord"
                />
              </div>
              <span className="name">
                {receiver
                  ? `${receiver.firstName} ${receiver.lastName}`
                  : "Emmanuel David"}
              </span>
              <Link className="link-to-apartment">
                {receiver
                  ? receiver.address
                  : "Gwarimpa Pl. 9, 10243 Abuja, Nigeria"}
              </Link>
            </div>
          </Paper>
          <Container>
            <Row>
              <Col lg={{ offset: 4, span: 8 }}>
                <Row>
                  {conversations.map(({ sender, message, created_at }, idx) =>
                    sender === currentUser.id ? (
                      <MyMessage date={created_at} key={idx}>
                        {message}
                      </MyMessage>
                    ) : (
                      <OtherUserMessage date={created_at} key={idx}>
                        {message}
                      </OtherUserMessage>
                    )
                  )}
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
              <form className="chat-form" onSubmit={handleSubmit}>
                <TextField
                  className="chat-input"
                  placeholder="Type your message here"
                  fullWidth
                  multiline
                  rowsMax={4}
                  name="message"
                  onBlur={handleBlur}
                  value={values.message}
                  onChange={handleChange}
                  error={touched.message && Boolean(errors.message)}
                  helperText={touched.message && errors.message}
                />
                <button
                  type="submit"
                  className={`send-btn ${values.message && "active"}`}
                >
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
