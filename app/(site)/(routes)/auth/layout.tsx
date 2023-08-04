import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-40 pb-20 flex justify-center">{children}</div>;
};

export default AuthLayout;
