import React, {Fragment} from "react";
import {Container} from "react-bootstrap";
import {AddPropertySection, ListingsCardSection} from "../components/MyListingPage/index";

const MyListingsPage = () => {
  return (
    <Fragment fixed={true}>
      <Container className="my-listings-container" fluid={"lg"}>
        <AddPropertySection />
        <ListingsCardSection />
      </Container>
    </Fragment>
  );
};
export default MyListingsPage;
