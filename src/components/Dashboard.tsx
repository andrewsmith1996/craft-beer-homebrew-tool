import React from "react";
import { LatestBrew } from "./LatestBrew";
export function Dashboard() {
  return (
    <div className="w-full h-full flex">
      <div className="rounded-lg p-4 m-2 bg-primary w-3/4">Big</div>
      <div className="flex flex-col w-1/4">
        <LatestBrew />
        <div className="rounded-lg p-4 m-2 bg-primary h-48">Upcoming Brews</div>
      </div>
    </div>
  );
}
