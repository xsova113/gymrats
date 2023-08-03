"use client";
import { ParallaxProvider as ParaProvider } from "react-scroll-parallax";

const ParallaxProvider = ({ children }: { children: React.ReactNode }) => {
  return <ParaProvider>{children}</ParaProvider>;
};

export default ParallaxProvider;
