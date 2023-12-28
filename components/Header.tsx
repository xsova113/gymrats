"use client";

import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import ServicesDropdown from "./ServicesDropdown";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import LogoLink from "./LogoLink";
import ClassesDropdown from "./ClassesDropdown";
import { useRouter } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Cart from "./Cart";
import { useScrollTrigger } from "@/hooks/use-scroll-trigger";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const show = useScrollTrigger()

  return (
    <header
      className={cn(
        "lg:px-10 px-4 flex items-center fixed w-full justify-between bg-black/50 z-50 backdrop-blur py-4 transition",
        show ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <LogoLink />

      <nav className="lg:flex items-center hidden gap-2">
        <Link
          href={"/"}
          className={cn(
            "capitalize hover:bg-stone-900 transition p-2 px-4 rounded-md",
            "/" === pathname && " bg-neutral-800"
          )}
        >
          Home
        </Link>
        <ClassesDropdown />
        <ServicesDropdown />
        <Link
          href={"/contact"}
          className={cn(
            "capitalize hover:bg-stone-900 transition p-2 px-4 rounded-md",
            "/contact" === pathname && "bg-neutral-800"
          )}
        >
          Contact
        </Link>
        <Link
          href={"/supplement"}
          className={cn(
            "capitalize hover:bg-stone-900 transition p-2 px-4 rounded-md",
            "/supplement" === pathname && "bg-neutral-800"
          )}
        >
          Supplement
        </Link>
        <Link
          href={"/about"}
          className={cn(
            "capitalize hover:bg-stone-900 transition p-2 px-4 rounded-md",
            "/about" === pathname && "bg-neutral-800"
          )}
        >
          About
        </Link>
      </nav>

      <div className="flex items-center mr-2 space-x-4 max-lg:ml-auto">
        <Cart />

        <UserButton afterSignOutUrl="/" signInUrl="/" />

        <Button
          onClick={() => router.push("/services/membership")}
          className="max-lg:hidden text-red-600 uppercase font-semibold transition hover:scale-110"
        >
          Join Now
        </Button>
      </div>

      <MobileNavbar />
    </header>
  );
};

export default Header;
