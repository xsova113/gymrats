"use server";

import { prisma } from "@/prisma/client";
import { User } from "@prisma/client";

const submitForm = async (data: User) => {
  try {
    await prisma.user.create({
      data,
    });

    return console.log("Submit successfully");
  } catch (error: any) {
    return error.message;
  }
};

export default submitForm;
