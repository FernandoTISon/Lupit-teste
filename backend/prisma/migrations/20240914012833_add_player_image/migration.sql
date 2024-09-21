/*
  Warnings:

  - You are about to drop the column `image` on the `teams` table. All the data in the column will be lost.
  - Added the required column `image` to the `players` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teamImage` to the `teams` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "teamId" TEXT,
    "image" TEXT NOT NULL,
    CONSTRAINT "players_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "teams" ("teamId") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_players" ("age", "id", "name", "teamId") SELECT "age", "id", "name", "teamId" FROM "players";
DROP TABLE "players";
ALTER TABLE "new_players" RENAME TO "players";
CREATE UNIQUE INDEX "players_id_key" ON "players"("id");
CREATE TABLE "new_teams" (
    "teamId" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "teamImage" TEXT NOT NULL
);
INSERT INTO "new_teams" ("name", "teamId") SELECT "name", "teamId" FROM "teams";
DROP TABLE "teams";
ALTER TABLE "new_teams" RENAME TO "teams";
CREATE UNIQUE INDEX "teams_teamId_key" ON "teams"("teamId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
