import React from "react";

export function LatestBrew() {
  return (
    <div className="rounded-lg p-4 m-2 bg-primary">
      <h1 className="text-white text-xl text-center font-bold mb-2">
        Latest Brew
      </h1>
      <h3 className="text-base">Saison Blanc - 7%</h3>
      <h5 className="text-sm mb-2">
        A spritzy saison with flotal hints of white wine, white grape and peach.
      </h5>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h5>OG: 1056</h5>
          <h5>Currently: 1020</h5>
        </div>
        <h5 className="text-xl text-white font-bold">5.6%</h5>
      </div>
      <div className="flex justify-between items-center mb-2">
        <div>
          <h5>Primary</h5>
          <h5>Fermentation</h5>
        </div>
        <h5 className="text-xl text-white font-bold">9 days</h5>
      </div>
    </div>
  );
}
