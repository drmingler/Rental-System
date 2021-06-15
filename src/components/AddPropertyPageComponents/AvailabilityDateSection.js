import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import {ListingInstructions} from "./index";
import {toDate} from "../../helpers/utils";

const AvailabilityDateSection = ({ formHandlers }) => {
  const { setFieldValue, handleBlur, values } = formHandlers;
  return (
    <section className="post-listing-section">
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <div className="available-from">
              <h3 className="section-header">Available From</h3>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  name="availableFrom"
                  fullWidth
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  placeholder="Date of birth"
                  margin="normal"
                  onBlur={handleBlur}
                  value={values.availableFrom || new Date()}
                  onChange={date => {
                    setFieldValue("availableFrom", toDate(date));
                  }}
                  KeyboardButtonProps={{
                    "aria-label": "change date"
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
          </Col>
          <ListingInstructions offset={5} InstructionKey={"instruction5"}>
            Specify when your property will be available so tenants can choose
            proper move-in dates.
          </ListingInstructions>
        </Row>
      </Container>
    </section>
  );
};
export default AvailabilityDateSection;
