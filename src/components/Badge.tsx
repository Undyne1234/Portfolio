import React from "react";

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="badge">
    {children}
  </span>
);