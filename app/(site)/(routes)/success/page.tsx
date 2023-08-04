"use client";

import React, { useEffect } from "react";
import { useAuth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { runConfetti } from "@/lib/confetti";

const SuccessPage = () => {
  const user = useAuth();
  const router = useRouter();

  !user.userId && redirect("/");

  useEffect(() => {
    runConfetti();
  }, []);

  return (
    <section>
      <div className="text-center bg-red-600 py-20 px-32 rounded-2xl">
        <span className="text-6xl">🥳</span>
        <h1 className="md:text-4xl font-bold mt-4">
          Welcome to GYM<span className="text-neutral-900">RATS</span> family!
        </h1>
        <p className="mt-10">You are now officially part of our member.</p>
        <p className="mt-2">
          If you have any questions, feel free to&nbsp;
          <Link href={"/contact"} className="text-neutral-900 hover:underline">
            contact us
          </Link>
          .
        </p>
        <div className="flex gap-x-4 justify-center mt-10">
          <Button
            className="capitalize font-semibold"
            onClick={() => router.push("/classes")}
          >
            Check out our classes
          </Button>

          <Button
            className="bg-neutral-900 text-white hover:bg-neutral-900/80 capitalize font-semibold"
            onClick={() => router.push("/services/personaltraining")}
          >
            Book a free fitness assessment
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SuccessPage;
