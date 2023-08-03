"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface JoinMembershipProps {
  className?: string;
}

const JoinMembership = ({ className }: JoinMembershipProps) => {
  const router = useRouter();

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-x-8 mt-20 md:mt-40 items-center",
        className
      )}
    >
      <div className="flex flex-col flex-1 gap-y-10 z-20">
        <h2 className="text-3xl font-bold">Not a member yet?</h2>
        <p className="text-muted-foreground">
          Join the membership to enjoy all the group classes with&nbsp;
          <span className="text-red-600">unlimited</span> access.
        </p>
        <Button
          onClick={() => router.push("/services/membership")}
          className="w-fit text-lg"
        >
          Join membership
        </Button>
      </div>
      <div className="flex-1 relative w-full aspect-video max-md:mt-10">
        <div className="bg-gradient-to-r from-neutral-100/0 to-neutral-950 w-1/2 aspect-[16/18] absolute right-5 top-0 z-10" />
        <Image src={"/images/joinmembership.png"} alt={"image"} fill />
        <div className="bg-gradient-to-l from-neutral-100/0 to-neutral-950 absolute left-0 w-1/2 aspect-[16/18]" />
      </div>
    </div>
  );
};

export default JoinMembership;
