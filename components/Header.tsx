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
import AvatarButton from "./AvatarButton";
import { SignInButton, SignedOut, UserButton } from "@clerk/nextjs";

const Header = () => {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const [show, setShow] = useState(true);
  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", () => {
      currentScrollPosition = window.scrollY;

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  if (!isMounted) return null;

  return (
    <header
      className={cn(
        "lg:px-10 px-4 flex items-center fixed w-full justify-between bg-black/50 z-50 backdrop-blur py-4 transition",
        show ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <LogoLink />

      <nav className="lg:flex items-center hidden">
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
