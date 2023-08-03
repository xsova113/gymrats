import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const LogoLink = ({ className }: { className?: string }) => {
  return (
    <Link href={"/"} className={cn("text-2xl", className)}>
      GYM<span className={"text-red-600 font-bold"}>RATS</span>
    </Link>
  );
};

export default LogoLink;
