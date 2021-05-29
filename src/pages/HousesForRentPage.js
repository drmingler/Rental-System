import React, {Fragment, useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
import NavBar from "../components/LayoutComponents/NavBar";
import {MobileNavbar} from "../components/LayoutComponents/index";
import CustomTransition from "../components/CommonComponents/CustomTransition";
import {
  FilterOptionPanel,
  HouseScrollArea,
  SearchControlPanel,
  SearchControlPanelMobile
} from "../components/HousesForRentPageComponents/index";
import Map from "../components/HousesForRentPageComponents/Map";

const HousesForRentPage = () => {
  const [showPanel, setPanel] = useState(false);
  const [smallDevice, setCurrentDevice] = useState(false);

  // Keep track of selected filter options
  const [filtersOptions, setFilterOption] = useState({});
  console.log(filtersOptions)

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
                showPanel={showPanel}
                smallDevice={smallDevice}
                togglePanel={togglePanel}
              />
              <SearchControlPanelMobile
                togglePanel={togglePanel}
                showPanel={showPanel}
                clearFilter={clearFilter}
              />
              <FilterOptionPanel
                showPanel={showPanel}
                setFilterOption={setFilterOption}
                filtersOptions={filtersOptions}
                clearFilter={clearFilter}
              />
              <CustomTransition
                  state={showPanel}
                  initialClass={"find-property-btn"}
                  finalClass={"find-property-btn-enter"}
              >
                <button>Find Properties</button>
              </CustomTransition>
              <HouseScrollArea/>
            </Col>
            <Map/>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};
export default HousesForRentPage;
