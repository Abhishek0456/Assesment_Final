import React from "react";

const Reports = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Reports</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Total Projects</h3>
          <p className="text-2xl">1</p>
          <a className="text-blue-500" href="#">
            View More
          </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Completed Projects</h3>
          <p className="text-2xl">0</p>
          <a className="text-blue-500" href="#">
            View More
          </a>
        </div>
        <div className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-bold">Employees Chart</h3>
          <img
            alt="Employees Chart"
            height="200"
            src="https://imgur.com/a/1sGvnib"
            width="200"
          />
        </div>
        {/* Additional report sections can be added here */}
      </div>
    </div>
  );
};

export default Reports;
