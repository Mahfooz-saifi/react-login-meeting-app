import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Dashboard = () => {
  const firstTable = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Sr. No.</strong>{" "}
            </TableCell>
            <TableCell>
              <strong>Name</strong>
            </TableCell>
            <TableCell>
              <strong>Role</strong>
            </TableCell>
            <TableCell>
              <strong>Comminssion (AED)</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>10/10/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>10/10/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>10/10/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>10/10/2023</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>10/10/2023</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  const secondTable = () => {
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>Sr. No.</strong>{" "}
            </TableCell>
            <TableCell>
              <strong>Manager</strong>
            </TableCell>
            <TableCell>
              <strong>Agent</strong>
            </TableCell>
            <TableCell>
              <strong>#</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Manager</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>05</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>05</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>05</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>01</TableCell>
            <TableCell>Unit 01</TableCell>
            <TableCell>Agent</TableCell>
            <TableCell>05</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );
  };

  return (
    <div>
      <div className="row mt-3 mx-3" style={{ marginRight: "0" }}>
        <h1>Dashboard</h1>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card p-3">
            <h1>04</h1>
            <strong>Total Client</strong>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card p-3">
            <h1>04</h1>
            <strong>Total Leads</strong>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card p-3">
            <h1>04</h1>
            <strong>Total Agents</strong>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 col-sm-12">
          <div className="card p-3">
            <h1>04</h1>
            <strong>Total Agents</strong>
          </div>
        </div>
      </div>
      <div className="row mx-3 my-2" style={{ marginRight: "0" }}>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card p-3">
            <h4>Commission Count</h4>
            {firstTable()}
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="card p-3">
            <h4>Leads Count of Agents</h4>
            {secondTable()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
