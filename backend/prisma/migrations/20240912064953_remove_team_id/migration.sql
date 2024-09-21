/*
  Warnings:

  - The primary key for the `teams` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `teams` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new__TeamPlayers" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_TeamPlayers_A_fkey" FOREIGN KEY ("A") REFERENCES "players" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_TeamPlayers_B_fkey" FOREIGN KEY ("B") REFERENCES "teams" ("teamId") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__TeamPlayers" ("A", "B") SELECT "A", "B" FROM "_TeamPlayers";
DROP TABLE "_TeamPlayers";
ALTER TABLE "new__TeamPlayers" RENAME TO "_TeamPlayers";
CREATE UNIQUE INDEX "_TeamPlayers_AB_unique" ON "_TeamPlayers"("A", "B");
CREATE INDEX "_TeamPlayers_B_index" ON "_TeamPlayers"("B");
CREATE TABLE "new_teams" (
    "teamId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);
INSERT INTO "new_teams" ("name", "teamId") SELECT "name", "teamId" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
CREATE UNIQUE INDEX "teams_teamId_key" ON "teams"("teamId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
