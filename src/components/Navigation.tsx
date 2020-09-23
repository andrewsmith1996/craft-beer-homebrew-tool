import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <div className="w-24 h-screen bg-tertiary">
      <div className="flex justify-center py-4 border-b-2 border-white mb-6">
        <Link to="/">
          <img
            src={require("../assets/icons/beer.svg")}
            className="w-12 h-12"
          />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Link to="/dashboard">
          <div className="mb-8 flex flex-col justify-center items-center">
            <img
              src={require("../assets/icons/dashboard.svg")}
              className="w-8 h-8 mb-2"
            />
            <p className="text-xs text-white">Dashboard</p>
          </div>
        </Link>
        <div className="mb-8 flex flex-col justify-center items-center">
          <img
            src={require("../assets/icons/edit.svg")}
            className="w-8 h-8 mb-2"
          />
          <p className="text-xs text-white">Recipe Builder</p>
        </div>
        <div className="mb-8 flex flex-col justify-center items-center">
          <img
            src={require("../assets/icons/recipe-book.svg")}
            className="w-8 h-8 mb-2"
          />
          <p className="text-xs text-white">My Recipes</p>
        </div>
      </div>
    </div>
  );
}
