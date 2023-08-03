-- CreateTable
CREATE TABLE "User" (
    "id" INT8 NOT NULL DEFAULT unique_rowid(),
    "firstName" STRING NOT NULL,
    "email" STRING NOT NULL,
    "description" STRING NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
