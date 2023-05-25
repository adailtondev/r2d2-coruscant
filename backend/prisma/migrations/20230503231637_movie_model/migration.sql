-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "sequential" TEXT NOT NULL,
    "trilogy" TEXT NOT NULL,
    "img" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "trailer" TEXT NOT NULL,
    CONSTRAINT "Movie_pkey" PRIMARY KEY ("id")
);
