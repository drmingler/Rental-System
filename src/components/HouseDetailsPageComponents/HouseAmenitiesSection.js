import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {
  AirConditionDark,
  BalconyDark,
  DeckDark,
  DishwasherDark,
  DoormanDark,
  ElevatorDark,
  FireplaceDark,
  FurnishedDark,
  GardenDark,
  GymDark,
  HardFloorDark,
  HighRiseDark,
  ParkingDark,
  PoolDark,
  StorageDark,
  StudentFriendlyDark,
  UtilitiesDark,
  ViewDark,
  WasherDark,
  WheelchairDark
} from "../../assets/img/amenities/index";
import {AmenitiesIconWrapper} from "../CommonComponents/index";

const HouseAmenitiesSection = () => {
  return (
    <section className="listing-amenities-section">
      <div className="listing-amenities-container">
        <Container fluid="lg">
          <Row>
            <Col
              md={12}
              lg={9}
              className="listing-amenities house-amenities-section"
            >
              <Row>
                <Col md={6} lg={6}>
                  <div className="amenities-header">
                    <h1 className="section-header">Amenities</h1>
                  </div>
                </Col>
              </Row>
              <ul className="row">
                <AmenitiesIconWrapper Icon={PoolDark} name={"Pool"} />
                <AmenitiesIconWrapper Icon={GardenDark} name={"Garden"} />
                <AmenitiesIconWrapper Icon={ElevatorDark} name={"Elevator"} />
                <AmenitiesIconWrapper Icon={DoormanDark} name={"Doorman"} />
                <AmenitiesIconWrapper Icon={DeckDark} name={"Deck"} />
                <AmenitiesIconWrapper
                  Icon={WasherDark}
                  name={"Washer/Dryer In Unit"}
                />
                <AmenitiesIconWrapper Icon={GymDark} name={"Gym"} />
                <AmenitiesIconWrapper
                  Icon={ParkingDark}
                  name={"Parking Spot"}
                />
                <AmenitiesIconWrapper Icon={FireplaceDark} name={"Fireplace"} />
                <AmenitiesIconWrapper
                  Icon={AirConditionDark}
                  name={"Air Conditioning"}
                />
                <AmenitiesIconWrapper
                  Icon={DishwasherDark}
                  name={"Dishwasher"}
                />
                <AmenitiesIconWrapper Icon={StorageDark} name={"Storage"} />
                <AmenitiesIconWrapper
                  Icon={WheelchairDark}
                  name={"Wheelchair Accessible"}
                />
                <AmenitiesIconWrapper
                  Icon={HardFloorDark}
                  name={"Hardwood Floors"}
                />
                <AmenitiesIconWrapper Icon={BalconyDark} name={"Balcony"} />
                <AmenitiesIconWrapper
                  Icon={FurnishedDark}
                  name={"Furnished"}
                />
                <AmenitiesIconWrapper Icon={ViewDark} name={"View"} />
                <AmenitiesIconWrapper
                  Icon={HighRiseDark}
                  name={"High Rise"}
                />
                <AmenitiesIconWrapper
                  Icon={StudentFriendlyDark}
                  name={"Student Friendly"}
                />
                <AmenitiesIconWrapper
                  Icon={UtilitiesDark}
                  name={"Utilities Included"}
                />
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};
export default HouseAmenitiesSection;
