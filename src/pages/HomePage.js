import React, {useEffect} from "react";
import {PerfectPlace} from "../components/CommonComponents/index";
import {Layout} from "../components/LayoutComponents/index";
import {useDispatch} from "react-redux";
import {AvailableCities, Cities, Header, ListingCategories, Steps} from "../components/HomepageComponents/index";
import {handleGetProperty} from "../store/propertySlice";

function HomePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(
    //   handleLogin({ email: "kymedia@gmail.com", password: "Krypton@16" })
    // );
    dispatch(handleGetProperty(1));
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
