import { Toaster } from "@/components/ui/toaster";
import React from "react";

const ContactLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-full">
      {children}
      <Toaster />
    </div>
  );
};

export default ContactLayout;
