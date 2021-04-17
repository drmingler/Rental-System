import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Amenities, FilterOptions, HousePriceSlider} from "./index";
import CustomTransition from "../CommonComponents/CustomTransition";
import {bathRoomNumber, bedroomsNumber, houseRulesConfig, houseType} from "../../constants/PropertyConstants";

const FilterOptionPanel = ({
  showPanel,
  filtersOptions,
  setFilterOption,
  clearFilter
}) => {
  return (
    <CustomTransition
      state={showPanel}
      initialClass={"filter-options-panel"}
      finalClass={"filter-options-panel-enter"}
    >
      <Container fluid={"md"}>
        <HousePriceSlider filtersOptions={filtersOptions} />
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Type</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              {houseType.map(type => (
                  <FilterOptions
                      filtersOptions={filtersOptions}
                      setFilterOption={setFilterOption}
                      sizeBig={4}
                      sizeSmall={6}
                      text={type.text}
                      key={type.key}
                      customKey={type.key}
                      value={type.value}
                  />
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Bedrooms</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              {bedroomsNumber.map(type => (
                  <FilterOptions
                      filtersOptions={filtersOptions}
                      setFilterOption={setFilterOption}
                      sizeBig={3}
                      sizeSmall={4}
                      text={type.text}
                      key={type.key}
                      customKey={type.key}
                      value={type.value}
                  />
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Bathrooms</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              {bathRoomNumber.map(bathroom => (
                  <FilterOptions
                      filtersOptions={filtersOptions}
                      setFilterOption={setFilterOption}
                      sizeBig={3}
                      sizeSmall={4}
                      text={bathroom.text}
                      key={bathroom.key}
                      customKey={bathroom.key}
                      value={bathroom.value}
                  />
              ))}
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Property Rules</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              {houseRulesConfig.map(rules => (
                  <FilterOptions
                      filtersOptions={filtersOptions}
                      setFilterOption={setFilterOption}
                      sizeBig={6}
                      sizeSmall={6}
                      text={rules.text}
                      key={rules.key}
                      customKey={rules.key}
                      value={rules.value}
                  />
              ))}
            </Row>
          </Col>
        </Row>
        <Amenities
          filtersOptions={filtersOptions}
          setFilterOption={setFilterOption}
        />
        <Row className="panel-container panel-button">
          <Col md={12} xl={12}>
            <Row className="justify-content-center">
              <button className="clear-btn" onClick={clearFilter}>
                Clear All
              </button>
            </Row>
          </Col>
        </Row>
      </Container>
    </CustomTransition>
  );
};
export default FilterOptionPanel;
