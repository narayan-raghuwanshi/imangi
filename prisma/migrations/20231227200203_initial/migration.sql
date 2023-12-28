-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "author" TEXT NOT NULL,
    "width" INTEGER NOT NULL,
    "height" INTEGER NOT NULL,
    "url" TEXT NOT NULL,

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);
