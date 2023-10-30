import React, { useState } from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import {
  FaFilter,
  FaEllipsisV,
  FaTrashAlt,
  FaFileExport,
  FaSearch,
} from "react-icons/fa";
import { Button } from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import MeetingForm from "./MeetingForm";

const Meeting = () => {
  const [viewMode, setViewMode] = useState(0);
  const dataTable = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Sr. No.</strong>{" "}
            </TableCell>
            <TableCell>
              <strong>
                Client Name <FaFilter />
              </strong>
            </TableCell>
            <TableCell>
              <strong>Agent Name</strong>
            </TableCell>
            <TableCell>
              <strong>Product Pitch</strong>
            </TableCell>
            <TableCell>
              <strong>Meeting Date</strong>
            </TableCell>
            <TableCell>
              <strong>Status</strong>
            </TableCell>
            <TableCell>
              <strong>Action</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Client_01</TableCell>
            <TableCell>Agent_01</TableCell>
            <TableCell>Flats</TableCell>
            <TableCell>10/10/2023</TableCell>
            <TableCell>Scheduled</TableCell>
            <TableCell>
              <FaEllipsisV />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  return (
    <div>
      <div className="row mt-3 mx-3" style={{ marginRight: "0" }}>
        <div className="d-flex justify-content-between">
          <div>
            <h1>Meetings</h1>
            <small style={{ color: "yellow" }}>
              {viewMode === 1 ? (
                <u>View Meetings {">>"} Add Meetings</u>
              ) : (
                <u>View Meetings</u>
              )}
            </small>
          </div>
          {viewMode !== 1 ? (
            <div>
              <Button
                variant="contained"
                style={{ backgroundColor: "yellow", color: "white" }}
                onClick={() => setViewMode(1)}
              >
                Add Meeting
              </Button>
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12 mt-3">
          {viewMode === 1 ? (
            <MeetingForm/>
          ) : (
            <div className="card p-3">
              <div className="d-flex justify-content-between">
                <h5>Meetings</h5>
                <div className="d-flex">
                  <span className="py-1 px-2 border rounded text-muted">
                    {" "}
                    <FaFileExport />{" "}
                  </span>
                  <span className="py-1 px-2 border rounded text-muted mx-2">
                    {" "}
                    <FaTrashAlt />{" "}
                  </span>
                  <div>
                    <Paper
                      component="form"
                      sx={{
                        p: "2px 4px",
                        display: "flex",
                        alignItems: "center",
                        width: 400,
                      }}
                    >
                      <FaSearch />
                      <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder="Search"
                        inputProps={{ "aria-label": "search google maps" }}
                      />
                    </Paper>
                  </div>
                </div>
              </div>
              {dataTable()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Meeting;
