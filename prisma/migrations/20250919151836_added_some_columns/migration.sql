/*
  Warnings:

  - Added the required column `businessName` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."Review" ADD COLUMN     "businessName" TEXT NOT NULL,
ALTER COLUMN "email" DROP NOT NULL;
