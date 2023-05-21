/*
  Warnings:

  - Added the required column `code` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "syllabus" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "rating_sum" INTEGER NOT NULL DEFAULT 0,
    "rating_cnt" INTEGER NOT NULL DEFAULT 0,
    "difficulty_sum" INTEGER NOT NULL DEFAULT 0,
    "difficulty_cnt" INTEGER NOT NULL DEFAULT 0,
    "recommend_sum" INTEGER NOT NULL DEFAULT 0,
    "recommend_cnt" INTEGER NOT NULL DEFAULT 0,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_subjects" ("created_at", "department", "id", "name", "syllabus", "workload") SELECT "created_at", "department", "id", "name", "syllabus", "workload" FROM "subjects";
DROP TABLE "subjects";
ALTER TABLE "new_subjects" RENAME TO "subjects";
CREATE UNIQUE INDEX "subjects_name_key" ON "subjects"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
