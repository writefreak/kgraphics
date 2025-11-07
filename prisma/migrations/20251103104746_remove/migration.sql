/*
  Warnings:

  - You are about to drop the column `uploadedBy` on the `Design` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."Design" DROP CONSTRAINT "Design_uploadedBy_fkey";

-- AlterTable
ALTER TABLE "public"."Design" DROP COLUMN "uploadedBy";
