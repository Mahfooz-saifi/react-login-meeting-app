import React from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const MeetingForm = () => {
  return (
    <div>
      <div className="row mt-3 mx-3" style={{ marginRight: "0" }}>
        <div className="card p-3">
          <div className="row">
            <h5>Client Details</h5>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField id="outlined-multiline-flexible" label="Client Name" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField id="outlined-multiline-flexible" label="Mobile No." />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField
                id="outlined-multiline-flexible"
                label="Email Address"
              />
            </div>
          </div>
          <div className="row my-4">
            <h5>Meeting Information and Location</h5>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField
                id="outlined-multiline-flexible"
                label="Product Pitch"
              />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField id="outlined-multiline-flexible" label="Date" />
            </div>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField id="outlined-multiline-flexible" label="Country" />
            </div>
          </div>
          <div className="row">
            <h5>Agents</h5>
            <div className="col-lg-4 col-md-6 col-sm-12">
              <TextField id="outlined-multiline-flexible" label="Add Agents" />
            </div>
          </div>
          <div className="row mt-4">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <Button variant="contained" color="primary" type="submit" style={{backgroundColor:"yellow", color:"white"}}>
              Submit
            </Button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetingForm;
