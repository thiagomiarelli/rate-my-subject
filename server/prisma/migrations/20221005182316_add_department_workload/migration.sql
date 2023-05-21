/*
  Warnings:

  - Added the required column `department` to the `subjects` table without a default value. This is not possible if the table is not empty.
  - Added the required column `workload` to the `subjects` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_subjects" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "syllabus" TEXT NOT NULL,
    "department" TEXT NOT NULL,
    "workload" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_subjects" ("created_at", "id", "name", "syllabus") SELECT "created_at", "id", "name", "syllabus" FROM "subjects";
DROP TABLE "subjects";
ALTER TABLE "new_subjects" RENAME TO "subjects";
CREATE UNIQUE INDEX "subjects_name_key" ON "subjects"("name");
CREATE TABLE "new_evaluations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "difficulty" INTEGER NOT NULL,
    "recommended" BOOLEAN NOT NULL,
    "evaluation_method" TEXT NOT NULL,
    "comment" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "student" TEXT NOT NULL,
    "professor" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    CONSTRAINT "evaluations_student_fkey" FOREIGN KEY ("student") REFERENCES "students" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "evaluations_professor_fkey" FOREIGN KEY ("professor") REFERENCES "professors" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "evaluations_subject_fkey" FOREIGN KEY ("subject") REFERENCES "subjects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_evaluations" ("comment", "created_at", "difficulty", "evaluation_method", "id", "professor", "rating", "recommended", "student", "subject") SELECT "comment", "created_at", "difficulty", "evaluation_method", "id", "professor", "rating", "recommended", "student", "subject" FROM "evaluations";
DROP TABLE "evaluations";
ALTER TABLE "new_evaluations" RENAME TO "evaluations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
