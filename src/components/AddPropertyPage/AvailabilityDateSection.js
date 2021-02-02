import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { ListingImageInstructions } from "./index";

const AvailabilityDateSection = () => {
  const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = date => {
    setSelectedDate(date);
  };
  return (
    <section className="post-listing-section">
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <div className="available-from">
              <h3 className="section-header">Available From</h3>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  placeholder="mm/dd/yyyy"
                  margin="normal"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Col>
          <ListingImageInstructions offset={5}>
            Specify when your property will be available so tenants can choose
            proper move-in dates.
          </ListingImageInstructions>
        </Row>
      </Container>
    </section>
  );
};
export default AvailabilityDateSection;
