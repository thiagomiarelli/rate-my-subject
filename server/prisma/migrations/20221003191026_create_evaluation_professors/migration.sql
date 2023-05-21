-- CreateTable
CREATE TABLE "professors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "evaluations" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "rating" INTEGER NOT NULL,
    "dificulty" INTEGER NOT NULL,
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
