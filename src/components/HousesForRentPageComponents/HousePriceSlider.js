import React, {Fragment, useEffect} from "react";
import {Col, Row} from "react-bootstrap";
import Slider from "@material-ui/core/Slider";

const HousePriceSlider = ({ filtersOptions }) => {
    const [value, setValue] = React.useState([1, 100]);
    const [housePrice, setHousePrice] = React.useState(null);

    useEffect(() => {
        if (Object.keys(filtersOptions).length === 0) {
            setValue([1, 100]);
        }
    }, [filtersOptions]);

    const handleChange = (event, newValue) => {
        // Convert scale value to house prices
        let minPrice = (newValue[0] * 3000) / 100;
        let maxPrice = (newValue[1] * 3000) / 100;

        setHousePrice({ minPrice: minPrice, maxPrice: maxPrice });
        setValue(newValue);
    };

    let min = value[0];
    let max = value[1];

    return (
        <Fragment>
            <Row className="panel-container">
                <Col md={12}>
                    <Row className="justify-content-center">
                        <div className="panel-price">
                            {(min <= 1 && max >= 100) || max <= 1 ? (
                                <span>Any Price</span>
                            ) : (
                                <span>
                  <span>
                    {min <= 1 && max <= 100
                        ? "Up"
                        : `$${housePrice["minPrice"].toLocaleString("en")}`}
                  </span>
                                    &nbsp;
                                    <span>to</span>
                                    &nbsp;
                                    <span>
                    {`$${housePrice["maxPrice"].toLocaleString("en")}`}
                                        {max >= 100 && <span className="plus">+</span>}
                                        /month
                  </span>
                </span>
                            )}
                        </div>
                    </Row>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col lg={11} xs={11}>
                    <div className="panel-slider">
                        <Slider
                            value={value}
                            onChange={handleChange}
                            aria-labelledby="range-slider"
                        />
                    </div>
                </Col>
            </Row>
        </Fragment>
    );
};

export default HousePriceSlider;
