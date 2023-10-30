import React, { useState } from "react";
import "./appHeader.css";
import { FaTh } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const AppHeader = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="row px-3 my-2" style={{marginRight:'0'}}>
      <div className="col-lg-6 col-md-6 col-12">
        <div className="d-flex mb-0"
        onClick={()=> {
          setActiveTab(0);
          navigate('/dashboard')}}
        >
          <h1 style={{ marginBottom: "1px" }}>Abhishek</h1>
          <span className="text-muted mt-4 mx-2">Sales manager</span>
        </div>
        <small className="text-muted">abhishek@swavishsoftware.com</small>
      </div>
      <div className="col-lg-6 col-md-6 col-12 d-flex">
        <div
          className={activeTab === 0 ? "nav-item-active" : "nav-item"}
          onClick={() =>{
             setActiveTab(0);
             navigate('/dashboard')
            }}
        >
          <span className="mt-1 mx-2">
            <FaTh />
          </span>
          <h4>dashboard</h4>
        </div>
        <div
          className={activeTab === 1 ? "nav-item-active" : "nav-item"}
          onClick={() =>{
            navigate('/meetings')
             setActiveTab(1)}}
        >
          <span className="mt-1 mx-2">
            <FaTh />
          </span>

          <h4>Meetings</h4>
        </div>
        <div
          className={activeTab === 2 ? "nav-item-active" : "nav-item"}
          onClick={() => {
            navigate('/dashboard')
            setActiveTab(2)}}
        >
          <span className="mt-1 mx-2">
            <FaTh />
          </span>

          <h4>Leads</h4>
        </div>
        <div
          className={activeTab === 3 ? "nav-item-active" : "nav-item"}
          onClick={() => {
            navigate('/dashboard')
            setActiveTab(3)}}
        >
          <span className="mt-1 mx-2">
            <FaTh />
          </span>

          <h4>Bookings</h4>
        </div>
        <div
          className={activeTab === 4 ? "nav-item-active" : "nav-item"}
          onClick={() =>{
            navigate('/dashboard')
             setActiveTab(4)}}
        >
          <span className="mt-1 mx-2">
            <FaTh />
          </span>

          <h4>User</h4>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
