import React from "react";
import {Container} from "react-bootstrap";
import {AddPropertySection, ListingsCardSection} from "../components/MyListingPageComponents/index";
import {Layout} from "../components/LayoutComponents";

const MyListingsPage = () => {
  return (
      <Layout fixed={true}>
          <Container className="my-listings-container" fluid={"lg"}>
              <AddPropertySection/>
              <ListingsCardSection/>
          </Container>
      </Layout>
  );
};
export default MyListingsPage;
