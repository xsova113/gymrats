import React from "react";

const MembershipLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-full overflow-hidden">{children}</div>;
};

export default MembershipLayout;
