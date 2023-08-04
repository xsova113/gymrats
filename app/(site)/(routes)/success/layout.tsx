import React from "react";

const SuccessLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-44 flex justify-center h-full">{children}</div>;
};

export default SuccessLayout;
