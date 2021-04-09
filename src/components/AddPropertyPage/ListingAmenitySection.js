import {Col, Container, Row} from "react-bootstrap";
import React, {useState} from "react";
import {ReactComponent as AlertCircle} from "../../assets/img/alert-circle.svg";
import {ListingAmenitiesIconWrapper, ListingInstructions} from "./index";
import {
  AirConditionLight,
  AirConditionPurple,
  BalconyLight,
  BalconyPurple,
  DeckLight,
  DeckPurple,
  DishwasherLight,
  DishwasherPurple,
  DoormanLight,
  DoormanPurple,
  ElevatorLight,
  ElevatorPurple,
  FireplaceLight,
  FireplacePurple,
  FurnishedLight,
  FurnishedPurple,
  GardenLight,
  GardenPurple,
  GymLight,
  GymPurple,
  HardFloorLight,
  HardFloorPurple,
  HighRiseLight,
  HighRisePurple,
  ParkingLight,
  ParkingPurple,
  PoolLight,
  PoolPurple,
  StorageLight,
  StoragePurple,
  StudentFriendlyLight,
  StudentFriendlyPurple,
  UtilitiesLight,
  UtilitiesPurple,
  ViewLight,
  ViewPurple,
  WasherLight,
  WasherPurple,
  WheelchairLight,
  WheelchairPurple,
} from "../../assets/img/amenities/index";


const ListingAmenitySection = () => {
  const [houseAmenities, selectHouseAmenity] = useState({});
  return (
    <section className="listing-amenities-section">
      <div className="listing-amenities-container">
        <Container fluid="lg">
          <Row>
            <Col md={9} className="listing-amenities">
              <Row>
                <Col md={6} lg={6}>
                  <div className="amenities-header">
                    <h1 className="section-header">Amenities</h1>
                  </div>
                </Col>
                <Col
                  md={6}
                  lg={{ span: 5, offset: 1 }}
                  className="listing-icon-container"
                >
                  <div className="amenities-instruction">
                    <div className="svg-icon">
                      <AlertCircle />
                    </div>
                    <span>Mark what your place offers</span>
                  </div>
                </Col>
              </Row>
              <ul className="row">
                <ListingAmenitiesIconWrapper
                  InactiveIcon={PoolLight}
                  ActiveIcon={PoolPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Pool"}
                  key={"pool"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={GardenLight}
                  ActiveIcon={GardenPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Garden"}
                  key={"garden"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={ElevatorLight}
                  ActiveIcon={ElevatorPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Elevator"}
                  key={"elevator"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={DoormanLight}
                  ActiveIcon={DoormanPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Doorman"}
                  key={"doorman"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={DeckLight}
                  ActiveIcon={DeckPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Deck"}
                  key={"deck"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={WasherLight}
                  ActiveIcon={WasherPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Washer/Dryer In Unit"}
                  key={"washer"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={GymLight}
                  ActiveIcon={GymPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Gym"}
                  key={"gym"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={ParkingLight}
                  ActiveIcon={ParkingPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Parking Spot"}
                  key={"parking"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={FireplaceLight}
                  ActiveIcon={FireplacePurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Fireplace"}
                  key={"firePlace"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={AirConditionLight}
                  ActiveIcon={AirConditionPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Air Conditioning"}
                  key={"airCondition"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={DishwasherLight}
                  ActiveIcon={DishwasherPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Dishwasher"}
                  key={"dishWasher"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={StorageLight}
                  ActiveIcon={StoragePurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Storage"}
                  key={"itemStorage"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={WheelchairLight}
                  ActiveIcon={WheelchairPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Wheelchair Accessible"}
                  key={"wheelchair"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={BalconyLight}
                  ActiveIcon={BalconyPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Balcony"}
                  key={"balcony"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={HardFloorLight}
                  ActiveIcon={HardFloorPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Hardwood Floors"}
                  key={"hardFloor"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={FurnishedLight}
                  ActiveIcon={FurnishedPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Furnished"}
                  key={"furnished"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={ViewLight}
                  ActiveIcon={ViewPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"View"}
                  key={"view"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={HighRiseLight}
                  ActiveIcon={HighRisePurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"High Rise"}
                  key={"highRise"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={StudentFriendlyLight}
                  ActiveIcon={StudentFriendlyPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Student Friendly"}
                  key={"studentFriendly"}
                />
                <ListingAmenitiesIconWrapper
                  InactiveIcon={UtilitiesLight}
                  ActiveIcon={UtilitiesPurple}
                  houseAmenities={houseAmenities}
                  selectHouseAmenity={selectHouseAmenity}
                  text={"Utilities Included"}
                  key={"utilities"}
                />
              </ul>
            </Col>
            <ListingInstructions offset={0} InstructionKey={"instruction4"}>
              Check all amenities that your property has. Tenants like to know
              what your place offers.
            </ListingInstructions>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default ListingAmenitySection;
