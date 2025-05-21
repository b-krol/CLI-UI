import { AppSidebar } from "@/components/app-sidebar";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [expanded, setExpanded] = React.useState(true);

  return (
    <div className="flex flex-wrap h-full">
      <AppSidebar
        expanded={expanded}
        setExpanded={setExpanded}
        className={`${expanded ? 'w-3/12' : 'w-min'} ${expanded ? 'f-full' : 'h-min'}`}
      />
      <div className="w-9/12 grow h-full">
        Content
      </div>
    </div>
  );
}
