import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../components/NavBar";
import MobileNavbar from "../components/MobileNavBar";
import CustomTransition from "../components/CustomTransition";
import {
  SearchControlPanel,
  SearchControlPanelMobile,
  FilterOptionPanel,
  HouseScrollArea
} from "../components/HousesForRentPage/index";


const HousesForRentPage = () => {
  const [panel, setPanel] = useState(false);
  const [smallDevice, setCurrentDevice] = useState(false);

  // Keep track of selected filter options
  const [filtersOptions, setFilterOption] = useState({});

  const togglePanel = (panelState, isSmallDevice) => {
    setPanel(panelState);

    // Set to true if the dropdown menu is clicked  on a small device
    setCurrentDevice(!!isSmallDevice);
  };

  const clearFilter = () => {
    setFilterOption({});
  };

  return (
    <Fragment>
      <MobileNavbar />
      <NavBar fixed={true} />
      <section className="houses-for-rent-container">
        <Container fluid>
          <Row>
            <Col md={6} lg={5} className="scroll-area-container">
              <SearchControlPanel
                panel={panel}
                smallDevice={smallDevice}
                togglePanel={togglePanel}
              />
              <SearchControlPanelMobile
                togglePanel={togglePanel}
                panel={panel}
                clearFilter={clearFilter}
              />
              <FilterOptionPanel
                panel={panel}
                setFilterOption={setFilterOption}
                filtersOptions={filtersOptions}
                clearFilter={clearFilter}
              />
              <CustomTransition
                state={panel}
                initialClass={"find-property-btn"}
                finalClass={"find-property-btn-enter"}
              >
                <button>Find Properties</button>
              </CustomTransition>
              <HouseScrollArea />
            </Col>
            <Col md={6} lg={7} className="rental-map" />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HousesForRentPage;