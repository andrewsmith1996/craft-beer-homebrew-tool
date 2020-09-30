import React from "react";
import RecipeCard from './RecipeCard';

export function RecipesList() {
  const recipes = [
    {
      name: 'Saison'
    },
    {
      name: 'DDH IPA'
    }
  ]
  return (
    <div>
      <RecipeCard />
    </div>
  );
}
