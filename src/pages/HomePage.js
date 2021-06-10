import React, {useEffect} from "react";
import {PerfectPlace} from "../components/CommonComponents/index";
import {Layout} from "../components/LayoutComponents/index";
import {AvailableCities, Cities, Header, ListingCategories, Steps} from "../components/HomepageComponents/index";
import {FetchUserProfile} from "../api/index";

let new_user = {
  email: "kymedia@gmail.com",
  firstName: "ZIKKO",
  lastName: "David",
  password: "Krypton@16",
  phoneNumber: "07062235480"
};

function HomePage() {
  useEffect(() => {
      FetchUserProfile(60).then((result) => console.log(result))
  }, []);
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
