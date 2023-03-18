import React from "react";
import { HomeOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons/lib/icons";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
    
      <div className="navbar-login">
        <svg
          width="51"
          height="53"
          viewBox="0 0 51 53"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39 0V12H51V0H39ZM21.8379 4.12695L17.127 15.1621L28.1621 19.873L32.873 8.83789L21.8379 4.12695ZM0 11V23H12V11H0ZM45.5449 20.2871L34.291 24.4531L38.457 35.707L49.7109 31.541L45.5449 20.2871ZM0 26V38H12V26H0ZM15 26V38H27V26H15ZM0 41V53H12V41H0ZM15 41V53H27V41H15ZM30 41V53H42V41H30Z"
            fill="white"
          />
        </svg>
        <h3>DUNDER MIFFLIN</h3>

        <div className="title-login">
          <h3>
            <HomeOutlined /> Home
          </h3>
          <h3>
            <UserOutlined /> Profile
          </h3>
          <h3> Logout</h3>
        </div>
      </div>
      <div className="dashboard-section">
        <h1 className="dashboard-tiitle">Limitless Paper in a Paperless World</h1>
        <button className="order-now">ORDER NOW</button>
      </div>
    </div>
  );
};

export default Dashboard;
