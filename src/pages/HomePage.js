import React, {useEffect} from "react";
import {PerfectPlace} from "../components/CommonComponents/index";
import {Layout} from "../components/LayoutComponents/index";
import {useDispatch} from "react-redux";
import {AvailableCities, Cities, Header, ListingCategories, Steps} from "../components/HomepageComponents/index";
import {handleGetSubscriptions} from "../store/transactionSlice";

// chat slice
// Notification slice

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(handleGetSubscriptions());
  }, [dispatch]);
  return (
    <Layout>
      <Header />
      <Cities />
      <Steps />
      <PerfectPlace />
      <AvailableCities />
      <ListingCategories />
    </Layout>
  );
}

export default HomePage;
