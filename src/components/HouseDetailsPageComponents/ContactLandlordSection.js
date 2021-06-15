import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import Paper from "@material-ui/core/Paper";
import {ReactComponent as PhoneIcon} from "../../assets/img/phone.svg";
import {ReactComponent as MailIcon} from "../../assets/img/mail.svg";
import {ReactComponent as UserIcon} from "../../assets/img/user.svg";
import {ReactComponent as HomeIcon} from "../../assets/img/home.svg";
import {toFormatedDate} from "../../helpers/utils";
import {useHistory} from "react-router-dom";

const ContactLandlordSection = ({ landlordDetails }) => {
  let history = useHistory();
  const {
    numberOfProperties,
    avatar,
    firstName,
    nationality,
    id,
    created_at,
    bio
  } = landlordDetails || {};

  function handleRedirect(path) {
    history.push(path);
  }
  return (
    <section className="contact-landlord-section">
      <Container fluid="lg">
        <Row>
          <Col md={12} lg={9}>
            <Row>
              <Col sm={6} xl={5}>
                <Paper variant="outlined" className="contact-landlord-card">
                  <div className="landlord-image-wrapper">
                    <div className="landlord-image-container">
                      <img src={avatar} alt="landlord" />
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="landlord-short-details">
                      <h3>{firstName}</h3>
                      <span>{`From ${nationality}`}</span>
                    </div>
                    <button
                      className="contact-landlord-button"
                      onClick={() => handleRedirect(`/messages/chat/${id}`)}
                    >
                      {`Contact ${firstName}`}
                    </button>
                  </div>
                  <div className="phone-and-email">
                    <div className="text-icon-wrapper">
                      <div className="icon-wrapper">
                        <PhoneIcon />
                      </div>
                      <span>
                        <strong>Phone number</strong> verified
                      </span>
                    </div>
                    <div className="text-icon-wrapper">
                      <div className="icon-wrapper">
                        <MailIcon />
                      </div>
                      <span>
                        <strong>Email</strong> verified
                      </span>
                    </div>
                  </div>
                </Paper>
              </Col>
              <Col sm={6} xl={7}>
                <div className="landlord-name-address">
                  <h3>{firstName}</h3>
                  <span> {`From ${nationality}`}</span>
                </div>
                <div className="short-description">
                  <span>
                    {bio ||
                      `Hi I am ${firstName}. Happy to get in contact with you and you are welcome to live in our beautiful rooms.`}
                  </span>
                  <div className="landlord-stats-container">
                    <div className="landlord-stats">
                      <div className="icon-wrapper">
                        <UserIcon />
                      </div>
                      <span className="date-joined">Member since</span>
                      <span>{toFormatedDate(created_at)}</span>
                    </div>
                    <div className="landlord-stats">
                      <div className="icon-wrapper">
                        <HomeIcon />
                      </div>
                      <span>{`${numberOfProperties} listings`}</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default ContactLandlordSection;
