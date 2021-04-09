import React from "react";
import Layout from "../components/Layout/Layout";
import RentingHeader from "../components/RentingHeader";
import RentingLeft from "../components/RentingLeft";
import RentingFooter from "../components/RentingFooter";
import RentingRight from "../components/RentingRight";
import Tips from "../components/Tips";
import ProvenResults from "../components/ProvenResults";
import PlatformUsageMobile from "../components/PlatformUsageMobile";
import rentBG3 from "../assets/img/newProperty3.jpg";
import rentBG2 from "../assets/img/newProperty2.jpg";
import rentBG1 from "../assets/img/newProperty.jpg";
import messagingImage from "../assets/img/messaging.webp";
import {Col} from "react-bootstrap";

const PlatformUsage = () => {
  return (
    <Layout>
      <RentingHeader
        largeImage={rentBG3}
        mediumImage={rentBG2}
        smallImage={rentBG1}
      >
        <div className="renting-text-container">
          <Col lg={8}>
            <div className="renting-header-text">
              <h1>Direct messaging</h1>
              <p>
                A direct messaging service, straight out of our platform, allows
                for straight talking. Manage conversations with smart inbox
                tools and forget interruptions from third parties.
              </p>
            </div>
          </Col>
        </div>
      </RentingHeader>
      <RentingLeft image={messagingImage} shadow={false}>
        <h1>Book your new home from home</h1>
        <p>
          It’s wise to get to know your potential landlord, and no doubt they’ll
          want to know their future tenant too! You can get the conversation
          rolling in the click of a button. Simply enter your message and
          submit! Briefly introduce yourself; explain why you’re interested in
          their place, what you’ll be doing in that city and what your hobbies
          and interests are. This instantly establishes a personal connection.
          TOP TIP: before you move on to more specific questions about their
          listing, make sure you’ve checked the availability calendar and other
          details, so you don’t waste time asking questions you already have the
          answer to!
        </p>
      </RentingLeft>
      <Tips title={"Top tips for approaching an advertiser"} />
      <RentingRight image={messagingImage} shadow={false}>
        <h1>Book your new home from home</h1>
        <p>
          To increase your chances of finding the perfect place, it’s best to
          reach out to numerous advertisers. But this means you’ll have to keep
          an eye on your inbox and keep track of your chats. Remember that –
          though on average, advertisers respond within 7 hours – each
          advertiser will have a different level of engagement and response
          rate, meaning your conversations will progress at different speeds.
          Shortlist or Archive conversations to stay organised and keep your
          search focused.
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingRight>
      <RentingLeft image={messagingImage} shadow={false}>
        <h1>Book your new home from home</h1>
        <p>
          It’s wise to get to know your potential landlord, and no doubt they’ll
          want to know their future tenant too! You can get the conversation
          rolling in the click of a button. Simply enter your message and
          submit! Briefly introduce yourself; explain why you’re interested in
          their place, what you’ll be doing in that city and what your hobbies
          and interests are. This instantly establishes a personal connection.
          TOP TIP: before you move on to more specific questions about their
          listing, make sure you’ve checked the availability calendar and other
          details, so you don’t waste time asking questions you already have the
          answer to!
        </p>
        <a href="/">HOW TO FIND THE PERFECT PLACE</a>
      </RentingLeft>
      <ProvenResults />
      <RentingLeft shadow={false}>
        <h1>Book your new home from home</h1>
        <p>
          It’s wise to get to know your potential landlord, and no doubt they’ll
          want to know their future tenant too! You can get the conversation
          rolling in the click of a button. Simply enter your message and
          submit! Briefly introduce yourself; explain why you’re interested in
          their place, what you’ll be doing in that city and what your hobbies
          and interests are. This instantly establishes a personal connection.
          TOP TIP: before you move on to more specific questions about their
          listing, make sure you’ve checked the availability calendar and other
          details, so you don’t waste time asking questions you already have the
          answer to!
        </p>
        <button className="go-to-inbox">Go to My Inbox</button>
      </RentingLeft>
      <PlatformUsageMobile />
      <RentingFooter />
    </Layout>
  );
};
export default PlatformUsage;
