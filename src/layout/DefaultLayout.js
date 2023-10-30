import React from "react";
import { AppHeader, AppContent } from "../components/index";

const DefaultLayout = () => {
  return (
      <div className="d-flex flex-column bg-light">
        <AppHeader />
        <div className="body flex-grow-1">
          <AppContent />
        </div>
      </div>
  );
};

export default DefaultLayout;
