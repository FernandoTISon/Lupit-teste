/*
  Warnings:

  - You are about to drop the `_TeamPlayers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "_TeamPlayers_B_index";

-- DropIndex
DROP INDEX "_TeamPlayers_AB_unique";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_TeamPlayers";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "teamId" TEXT,
    CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams" ("teamId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_players" ("age", "id", "name", "teamId") SELECT "age", "id", "name", "teamId" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
CREATE UNIQUE INDEX "players_id_key" ON "players"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
