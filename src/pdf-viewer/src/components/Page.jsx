import * as React from "react";

export const Page = ({ children }) => (
  <div
    style={{
      width: "210mm",
      height: "297mm",
      padding: 0,
      backgroundColor: "white",
      pageBreakAfter: "always",
    }}
  >
    {children}
  </div>
);
