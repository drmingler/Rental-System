import React from "react";
import {Col, Row} from "react-bootstrap";

import {AmenitiesIcon} from "./index";
import {propertyAmenities} from "../../constants/PropertyConstants";

const Amenities = props => {
    const {filtersOptions, setFilterOption} = props;
    return (
        <Row className="panel-container">
            <Col md={12} xl={3} className="panel-heading">
                <h4>Amenities</h4>
            </Col>
            <Col md={12} xl={8}>
                <ul className="row">
                    {propertyAmenities.map(amenity => (
                        <AmenitiesIcon
                            filtersOptions={filtersOptions}
                            setFilterOption={setFilterOption}
                            IconWhite={amenity.iconWhite}
                            IconDark={amenity.iconGrey}
                            text={amenity.text}
                            key={amenity.key}
                            customKey={amenity.key}
                            value={amenity.value}
                        />
                    ))}
                </ul>
            </Col>
        </Row>
    );
};
export default Amenities;
