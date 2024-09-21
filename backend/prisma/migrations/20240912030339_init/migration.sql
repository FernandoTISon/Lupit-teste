-- CreateTable
CREATE TABLE "players" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "teamName" TEXT NOT NULL
);

CREATE UNIQUE INDEX "players_id_key" ON "players"("id");
