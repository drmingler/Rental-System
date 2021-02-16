import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  PoolDark,
  PoolWhite,
  GardenDark,
  GardenWhite,
  ElevatorDark,
  ElevatorWhite,
  DoormanDark,
  DoormanWhite,
  DeckDark,
  DeckWhite,
  WasherDark,
  WasherWhite,
  GymDark,
  GymWhite,
  ParkingDark,
  ParkingWhite,
  FireplaceDark,
  FireplaceWhite,
  AirConditionDark,
  AirConditionWhite,
  DishwasherDark,
  DishwasherWhite,
  StorageDark,
  StorageWhite,
  WheelchairDark,
  WheelchairWhite,
  BalconyDark,
  BalconyWhite,
  HardFloorDark,
  HardFloorWhite,
  FurnishedDark,
  FurnishedWhite,
  ViewDark,
  ViewWhite,
  HighRiseDark,
  HighRiseWhite,
  StudentFriendlyDark,
  StudentFriendlyWhite,
  UtilitiesDark,
  UtilitiesWhite
} from "../../assets/img/amenities/index";

import { AmenitiesIcon } from "./index";

const Amenities = ({ filtersOptions, setFilterOption }) => {
  return (
    <Row className="panel-container">
      <Col md={12} xl={3} className="panel-heading">
        <h4>Amenities</h4>
      </Col>
      <Col md={12} xl={8}>
        <Row>
          <AmenitiesIcon
            text={"Pool"}
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            iconDark={<PoolDark className="svg-icon" />}
            iconWhite={<PoolWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Garden"}
            iconDark={<GardenDark className="svg-icon" />}
            iconWhite={<GardenWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Elevator"}
            iconDark={<ElevatorDark className="svg-icon" />}
            iconWhite={<ElevatorWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Doorman"}
            iconDark={<DoormanDark className="svg-icon" />}
            iconWhite={<DoormanWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Deck"}
            iconDark={<DeckDark className="svg-icon" />}
            iconWhite={<DeckWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Washer/Dryer In Unit"}
            iconDark={<WasherDark className="svg-icon" />}
            iconWhite={<WasherWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Gym"}
            iconDark={<GymDark className="svg-icon" />}
            iconWhite={<GymWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Parking Spot"}
            iconDark={<ParkingDark className="svg-icon" />}
            iconWhite={<ParkingWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Fireplace"}
            iconDark={<FireplaceDark className="svg-icon" />}
            iconWhite={<FireplaceWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Air Conditioning"}
            iconDark={<AirConditionDark className="svg-icon" />}
            iconWhite={<AirConditionWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Dishwasher"}
            iconDark={<DishwasherDark className="svg-icon" />}
            iconWhite={<DishwasherWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Storage"}
            iconDark={<StorageDark className="svg-icon" />}
            iconWhite={<StorageWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Wheelchair Accessible"}
            iconDark={<WheelchairDark className="svg-icon" />}
            iconWhite={<WheelchairWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Hardwood Floors"}
            iconDark={<HardFloorDark className="svg-icon" />}
            iconWhite={<HardFloorWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Balcony"}
            iconDark={<BalconyDark className="svg-icon" />}
            iconWhite={<BalconyWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Furnished"}
            iconDark={<FurnishedDark className="svg-icon" />}
            iconWhite={<FurnishedWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"View"}
            iconDark={<ViewDark className="svg-icon" />}
            iconWhite={<ViewWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"High Rise"}
            iconDark={<HighRiseDark className="svg-icon" />}
            iconWhite={<HighRiseWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Student Friendly"}
            iconDark={<StudentFriendlyDark className="svg-icon" />}
            iconWhite={<StudentFriendlyWhite className="svg-icon" />}
          />
          <AmenitiesIcon
            filtersOptions={filtersOptions}
            setFilterOption={setFilterOption}
            text={"Utilities Included"}
            iconDark={<UtilitiesDark className="svg-icon" />}
            iconWhite={<UtilitiesWhite className="svg-icon" />}
          />
        </Row>
      </Col>
    </Row>
  );
};
export default Amenities;
