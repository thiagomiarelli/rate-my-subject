-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_professors" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "university" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "rating_sum" INTEGER NOT NULL DEFAULT 0,
    "rating_cnt" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_professors" ("created_at", "id", "name", "university") SELECT "created_at", "id", "name", "university" FROM "professors";
DROP TABLE "professors";
ALTER TABLE "new_professors" RENAME TO "professors";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
