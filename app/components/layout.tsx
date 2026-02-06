import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] z-0"></div>
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default layout;
