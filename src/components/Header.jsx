import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center">
        <img
          alt="OpsNex Logo"
          className="mr-2"
          height="50"
          src="https://th.bing.com/th/id/OIP.kEweSKXicOB0BDWrZw6z8gHaEK?rs=1&pid=ImgDetMain"
          width="50"
        />
        <h1 className="text-2xl font-bold">OpsNex</h1>
      </div>
      <div className="flex items-center space-x-4">
        <div className="relative">
          <input
            className="border rounded-full py-2 px-4"
            placeholder="Search"
            type="text"
          />
          <button className="absolute right-2 top-2 text-gray-500">
            <i className="fas fa-search"></i>
          </button>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-full">
          Ticket List
        </button>
      </div>
    </div>
  );
};

export default Header;
