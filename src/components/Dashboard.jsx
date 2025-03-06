import React from "react";
import Header from "./Header";
import Reports from "./Reports";

const Dashboard = () => {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <img
        alt="Welcome Image"
        className="mt-4"
        height="150"
        src="https://imgur.com/a/1sGvnib"
        width="150"
      />
      <Reports />
      {/* Additional components can be added here */}
    </div>
  );
};

export default Dashboard;
