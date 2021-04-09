import React, {useState} from "react";
import Paper from "@material-ui/core/Paper";
import {Col} from "react-bootstrap";

const ListingInstructions = ({ children, offset, InstructionKey }) => {
  const InstructionState = JSON.parse(localStorage.getItem(InstructionKey));

  // If instruction state is null, show the instruction
  const [showInstruction, setInstruction] = useState(InstructionState === null);

  const handleHideInstruction = () => {
    localStorage.setItem(InstructionKey, "false");
    setInstruction(false);
  };

  return (
    showInstruction && (
      <Col md={{ span: 3, offset: offset }}>
        <Paper elevation={0} className="listing-image-instruction">
          <span>{children}</span>
          <div className="got-it" onClick={handleHideInstruction}>
            <span>Got It</span>
          </div>
        </Paper>
      </Col>
    )
  );
};
export default ListingInstructions;
