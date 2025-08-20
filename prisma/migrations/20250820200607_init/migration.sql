/*
  Warnings:

  - Added the required column `data` to the `Investimento` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Investimento" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "valor" DECIMAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "data" DATETIME NOT NULL
);
INSERT INTO "new_Investimento" ("id", "nome", "tipo", "valor") SELECT "id", "nome", "tipo", "valor" FROM "Investimento";
DROP TABLE "Investimento";
ALTER TABLE "new_Investimento" RENAME TO "Investimento";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
