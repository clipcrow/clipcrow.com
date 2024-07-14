import React from "react";
import ReactDOM from "react-dom/client";
import { RedocStandalone } from "redoc";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RedocStandalone specUrl="/api/docs.json" />
  </React.StrictMode>,
);
