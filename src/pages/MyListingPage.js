import React, {useEffect} from "react";
import {Container} from "react-bootstrap";
import {AddPropertySection, ListingsCardSection} from "../components/MyListingPageComponents/index";
import {Layout} from "../components/LayoutComponents";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {handleGetProperties} from "../store/propertySlice";
import {BackDropLoading} from "../components/CommonComponents";

const MyListingsPage = () => {
  const dispatch = useDispatch();
  let { landlordId } = useParams();
  const { properties, isLoading } = useSelector(state => state.property);

  useEffect(() => {
    let query = `landlord=${landlordId}`;
    dispatch(handleGetProperties(query));
  }, [dispatch, landlordId]);

  return (
    <Layout fixed={true}>
      <BackDropLoading state={isLoading} />
      <Container className="my-listings-container" fluid={"lg"}>
        <AddPropertySection />
        <ListingsCardSection properties={properties} />
      </Container>
    </Layout>
  );
};
export default MyListingsPage;
