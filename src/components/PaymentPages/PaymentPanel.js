import React, {Fragment, useState} from "react";
import Paper from "@material-ui/core/Paper";
import {Col} from "react-bootstrap";
import {PanelForm, PanelRow} from "./index";

const PaymentPanel = () => {
  const [subscribe, setSubscribe] = useState(false);
  return (
    <Fragment>
      <Col lg={{ span: 7, offset: 1 }} md={12}>
        <Paper elevation={1} className="payment-panel">
          <div className="heading">
            <h3>Subscribe</h3>
          </div>
          <div className="panel-content-container">
            <PanelRow
              showTick={true}
              duration={"Monthly"}
              plan={"Pro Plan Monthly"}
              price={"$15.00"}
              setSubscribe={setSubscribe}
              subscribe={subscribe}
            />
            <PanelRow
              showTick={false}
              duration={"Yearly"}
              plan={"Pro Plan Yearly"}
              price={"$45.00"}
              setSubscribe={setSubscribe}
              subscribe={subscribe}
            />
          </div>
        </Paper>
      </Col>
      {subscribe && <PanelForm />}
    </Fragment>
  );
};
export default PaymentPanel;
