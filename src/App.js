import React from "react";
import RoutesHandler from "./route.js";
import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {
  return (
    <div>
      <RoutesHandler />
       <SpeedInsights />
    </div>
  );
}

export default App;
