/*
  Warnings:

  - The primary key for the `Progresso_Aulas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trilhas_Cursos` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "Progresso_Aulas" DROP CONSTRAINT "Progresso_Aulas_pkey",
ADD COLUMN     "ID_Progresso" SERIAL NOT NULL,
ADD CONSTRAINT "Progresso_Aulas_pkey" PRIMARY KEY ("ID_Progresso");

-- AlterTable
ALTER TABLE "Trilhas_Cursos" DROP CONSTRAINT "Trilhas_Cursos_pkey",
ADD COLUMN     "ID_TrilhaCurso" SERIAL NOT NULL,
ADD CONSTRAINT "Trilhas_Cursos_pkey" PRIMARY KEY ("ID_TrilhaCurso");
