import { Outlet } from "react-router-dom";
import { AppSidebar } from "../components/AppSidebar";
import React from "react";

export default function Layout() {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div className="flex flex-wrap h-full">
      <AppSidebar
        expanded={expanded}
        setExpanded={setExpanded}
        className={`min-w-fit
          ${expanded ? "w-3/12" : "w-min"} ${
          expanded ? "f-full" : "h-min"
        }`}
      />
      <div className="w-9/12 min-w-fit flex-1 grow h-full">
        <Outlet />
      </div>
    </div>
  );
}