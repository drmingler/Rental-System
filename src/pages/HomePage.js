import React, {useEffect} from "react";
import {PerfectPlace} from "../components/CommonComponents/index";
import {Layout} from "../components/LayoutComponents/index";
import {AvailableCities, Cities, Header, ListingCategories, Steps} from "../components/HomepageComponents/index";
import {useDispatch} from "react-redux";
import {handleGetCompleteUser} from "../store/userSlice";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    let token = localStorage.getItem("token");
    token && dispatch(handleGetCompleteUser());
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
