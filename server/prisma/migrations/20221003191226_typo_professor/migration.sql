/*
  Warnings:

  - You are about to drop the column `dificulty` on the `evaluations` table. All the data in the column will be lost.
  - Added the required column `difficulty` to the `evaluations` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
    CONSTRAINT "evaluations_student_fkey" FOREIGN KEY ("student") REFERENCES "students" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "evaluations_professor_fkey" FOREIGN KEY ("professor") REFERENCES "professors" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "evaluations_subject_fkey" FOREIGN KEY ("subject") REFERENCES "subjects" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_evaluations" ("comment", "created_at", "evaluation_method", "id", "professor", "rating", "recommended", "student", "subject") SELECT "comment", "created_at", "evaluation_method", "id", "professor", "rating", "recommended", "student", "subject" FROM "evaluations";
DROP TABLE "evaluations";
ALTER TABLE "new_evaluations" RENAME TO "evaluations";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
