import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Amenities, FilterOptions, HousePriceSlider} from "./index";
import CustomTransition from "../CustomTransition";

const FilterOptionPanel = ({
  panel,
  filtersOptions,
  setFilterOption,
  clearFilter
}) => {
  return (
    <CustomTransition
      state={panel}
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
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Apartment"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"House"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Condo"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Townhouse"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Duplex"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Loft"}
                sizeBig={4}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Room"}
                sizeBig={4}
                sizeSmall={6}
              />
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Bedrooms</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Studio"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"1 bed"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"2 bed"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"3 bed"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"4+ bed"}
                sizeBig={3}
                sizeSmall={4}
              />
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Bathrooms</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"1"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"2"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"3"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"4"}
                sizeBig={3}
                sizeSmall={4}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"5+"}
                sizeBig={3}
                sizeSmall={4}
              />
            </Row>
          </Col>
        </Row>
        <Row className="panel-container">
          <Col md={12} xl={3} className="panel-heading">
            <h4>Pet Policy</h4>
          </Col>
          <Col md={12} xl={8}>
            <Row>
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Dogs Allowed"}
                sizeBig={5}
                sizeSmall={6}
              />
              <FilterOptions
                filtersOptions={filtersOptions}
                setFilterOption={setFilterOption}
                text={"Cats Allowed"}
                sizeBig={5}
                sizeSmall={6}
              />
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
