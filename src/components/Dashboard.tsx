import React from "react";
import { LatestBrew } from "./LatestBrew";
import { RecipesList } from './Recipes/RecipesList';
import AddRecipe from './Recipes/AddRecipe';

export function Dashboard() {
  return (
    <div className="w-full h-full flex relative">
      <div className="rounded-lg p-4 m-2 bg-primary w-3/4">
      <RecipesList />
      </div>
      <div className="flex flex-col w-1/4">
        <LatestBrew />
        <div className="rounded-lg p-4 m-2 bg-primary h-48">Upcoming Brews</div>
      </div>
      <AddRecipe />
    </div>
  );
}
