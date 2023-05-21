-- CreateTable
CREATE TABLE "_ProfessorToSubject" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_ProfessorToSubject_A_fkey" FOREIGN KEY ("A") REFERENCES "professors" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_ProfessorToSubject_B_fkey" FOREIGN KEY ("B") REFERENCES "subjects" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "_ProfessorToSubject_AB_unique" ON "_ProfessorToSubject"("A", "B");

-- CreateIndex
CREATE INDEX "_ProfessorToSubject_B_index" ON "_ProfessorToSubject"("B");
