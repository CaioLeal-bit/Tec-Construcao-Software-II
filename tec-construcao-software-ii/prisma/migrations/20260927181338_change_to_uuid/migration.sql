/*
  Warnings:

  - The primary key for the `Assinaturas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Aulas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Avaliacoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Categorias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Certificados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Cursos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Matriculas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Modulos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Pagamentos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Planos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Progresso_Aulas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trilhas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Trilhas_Cursos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE "Assinaturas" DROP CONSTRAINT "Assinaturas_ID_Plano_fkey";

-- DropForeignKey
ALTER TABLE "Assinaturas" DROP CONSTRAINT "Assinaturas_ID_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Aulas" DROP CONSTRAINT "Aulas_ID_Modulo_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacoes" DROP CONSTRAINT "Avaliacoes_ID_Curso_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacoes" DROP CONSTRAINT "Avaliacoes_ID_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Certificados" DROP CONSTRAINT "Certificados_ID_Curso_fkey";

-- DropForeignKey
ALTER TABLE "Certificados" DROP CONSTRAINT "Certificados_ID_Trilha_fkey";

-- DropForeignKey
ALTER TABLE "Certificados" DROP CONSTRAINT "Certificados_ID_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Cursos" DROP CONSTRAINT "Cursos_ID_Categoria_fkey";

-- DropForeignKey
ALTER TABLE "Cursos" DROP CONSTRAINT "Cursos_ID_Instrutor_fkey";

-- DropForeignKey
ALTER TABLE "Matriculas" DROP CONSTRAINT "Matriculas_ID_Curso_fkey";

-- DropForeignKey
ALTER TABLE "Matriculas" DROP CONSTRAINT "Matriculas_ID_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Modulos" DROP CONSTRAINT "Modulos_ID_Curso_fkey";

-- DropForeignKey
ALTER TABLE "Pagamentos" DROP CONSTRAINT "Pagamentos_ID_Assinatura_fkey";

-- DropForeignKey
ALTER TABLE "Progresso_Aulas" DROP CONSTRAINT "Progresso_Aulas_ID_Aula_fkey";

-- DropForeignKey
ALTER TABLE "Progresso_Aulas" DROP CONSTRAINT "Progresso_Aulas_ID_Usuario_fkey";

-- DropForeignKey
ALTER TABLE "Trilhas" DROP CONSTRAINT "Trilhas_ID_Categoria_fkey";

-- DropForeignKey
ALTER TABLE "Trilhas_Cursos" DROP CONSTRAINT "Trilhas_Cursos_ID_Curso_fkey";

-- DropForeignKey
ALTER TABLE "Trilhas_Cursos" DROP CONSTRAINT "Trilhas_Cursos_ID_Trilha_fkey";

-- AlterTable
ALTER TABLE "Assinaturas" DROP CONSTRAINT "Assinaturas_pkey",
ALTER COLUMN "ID_Assinatura" DROP DEFAULT,
ALTER COLUMN "ID_Assinatura" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Plano" SET DATA TYPE TEXT,
ADD CONSTRAINT "Assinaturas_pkey" PRIMARY KEY ("ID_Assinatura");
DROP SEQUENCE "Assinaturas_ID_Assinatura_seq";

-- AlterTable
ALTER TABLE "Aulas" DROP CONSTRAINT "Aulas_pkey",
ALTER COLUMN "ID_Aula" DROP DEFAULT,
ALTER COLUMN "ID_Aula" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Modulo" SET DATA TYPE TEXT,
ADD CONSTRAINT "Aulas_pkey" PRIMARY KEY ("ID_Aula");
DROP SEQUENCE "Aulas_ID_Aula_seq";

-- AlterTable
ALTER TABLE "Avaliacoes" DROP CONSTRAINT "Avaliacoes_pkey",
ALTER COLUMN "ID_Avaliacao" DROP DEFAULT,
ALTER COLUMN "ID_Avaliacao" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ADD CONSTRAINT "Avaliacoes_pkey" PRIMARY KEY ("ID_Avaliacao");
DROP SEQUENCE "Avaliacoes_ID_Avaliacao_seq";

-- AlterTable
ALTER TABLE "Categorias" DROP CONSTRAINT "Categorias_pkey",
ALTER COLUMN "ID_Categoria" DROP DEFAULT,
ALTER COLUMN "ID_Categoria" SET DATA TYPE TEXT,
ADD CONSTRAINT "Categorias_pkey" PRIMARY KEY ("ID_Categoria");
DROP SEQUENCE "Categorias_ID_Categoria_seq";

-- AlterTable
ALTER TABLE "Certificados" DROP CONSTRAINT "Certificados_pkey",
ALTER COLUMN "ID_Certificado" DROP DEFAULT,
ALTER COLUMN "ID_Certificado" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Trilha" SET DATA TYPE TEXT,
ADD CONSTRAINT "Certificados_pkey" PRIMARY KEY ("ID_Certificado");
DROP SEQUENCE "Certificados_ID_Certificado_seq";

-- AlterTable
ALTER TABLE "Cursos" DROP CONSTRAINT "Cursos_pkey",
ALTER COLUMN "ID_Curso" DROP DEFAULT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Instrutor" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Categoria" SET DATA TYPE TEXT,
ADD CONSTRAINT "Cursos_pkey" PRIMARY KEY ("ID_Curso");
DROP SEQUENCE "Cursos_ID_Curso_seq";

-- AlterTable
ALTER TABLE "Matriculas" DROP CONSTRAINT "Matriculas_pkey",
ALTER COLUMN "ID_Matricula" DROP DEFAULT,
ALTER COLUMN "ID_Matricula" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ADD CONSTRAINT "Matriculas_pkey" PRIMARY KEY ("ID_Matricula");
DROP SEQUENCE "Matriculas_ID_Matricula_seq";

-- AlterTable
ALTER TABLE "Modulos" DROP CONSTRAINT "Modulos_pkey",
ALTER COLUMN "ID_Modulo" DROP DEFAULT,
ALTER COLUMN "ID_Modulo" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ADD CONSTRAINT "Modulos_pkey" PRIMARY KEY ("ID_Modulo");
DROP SEQUENCE "Modulos_ID_Modulo_seq";

-- AlterTable
ALTER TABLE "Pagamentos" DROP CONSTRAINT "Pagamentos_pkey",
ALTER COLUMN "ID_Pagamento" DROP DEFAULT,
ALTER COLUMN "ID_Pagamento" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Assinatura" SET DATA TYPE TEXT,
ADD CONSTRAINT "Pagamentos_pkey" PRIMARY KEY ("ID_Pagamento");
DROP SEQUENCE "Pagamentos_ID_Pagamento_seq";

-- AlterTable
ALTER TABLE "Planos" DROP CONSTRAINT "Planos_pkey",
ALTER COLUMN "ID_Plano" DROP DEFAULT,
ALTER COLUMN "ID_Plano" SET DATA TYPE TEXT,
ADD CONSTRAINT "Planos_pkey" PRIMARY KEY ("ID_Plano");
DROP SEQUENCE "Planos_ID_Plano_seq";

-- AlterTable
ALTER TABLE "Progresso_Aulas" DROP CONSTRAINT "Progresso_Aulas_pkey",
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Aula" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Progresso" DROP DEFAULT,
ALTER COLUMN "ID_Progresso" SET DATA TYPE TEXT,
ADD CONSTRAINT "Progresso_Aulas_pkey" PRIMARY KEY ("ID_Progresso");
DROP SEQUENCE "Progresso_Aulas_ID_Progresso_seq";

-- AlterTable
ALTER TABLE "Trilhas" DROP CONSTRAINT "Trilhas_pkey",
ALTER COLUMN "ID_Trilha" DROP DEFAULT,
ALTER COLUMN "ID_Trilha" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Categoria" SET DATA TYPE TEXT,
ADD CONSTRAINT "Trilhas_pkey" PRIMARY KEY ("ID_Trilha");
DROP SEQUENCE "Trilhas_ID_Trilha_seq";

-- AlterTable
ALTER TABLE "Trilhas_Cursos" DROP CONSTRAINT "Trilhas_Cursos_pkey",
ALTER COLUMN "ID_Trilha" SET DATA TYPE TEXT,
ALTER COLUMN "ID_Curso" SET DATA TYPE TEXT,
ALTER COLUMN "ID_TrilhaCurso" DROP DEFAULT,
ALTER COLUMN "ID_TrilhaCurso" SET DATA TYPE TEXT,
ADD CONSTRAINT "Trilhas_Cursos_pkey" PRIMARY KEY ("ID_TrilhaCurso");
DROP SEQUENCE "Trilhas_Cursos_ID_TrilhaCurso_seq";

-- AlterTable
ALTER TABLE "Usuarios" DROP CONSTRAINT "Usuarios_pkey",
ALTER COLUMN "ID_Usuario" DROP DEFAULT,
ALTER COLUMN "ID_Usuario" SET DATA TYPE TEXT,
ADD CONSTRAINT "Usuarios_pkey" PRIMARY KEY ("ID_Usuario");
DROP SEQUENCE "Usuarios_ID_Usuario_seq";

-- AddForeignKey
ALTER TABLE "Cursos" ADD CONSTRAINT "Cursos_ID_Instrutor_fkey" FOREIGN KEY ("ID_Instrutor") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cursos" ADD CONSTRAINT "Cursos_ID_Categoria_fkey" FOREIGN KEY ("ID_Categoria") REFERENCES "Categorias"("ID_Categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Modulos" ADD CONSTRAINT "Modulos_ID_Curso_fkey" FOREIGN KEY ("ID_Curso") REFERENCES "Cursos"("ID_Curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Aulas" ADD CONSTRAINT "Aulas_ID_Modulo_fkey" FOREIGN KEY ("ID_Modulo") REFERENCES "Modulos"("ID_Modulo") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matriculas" ADD CONSTRAINT "Matriculas_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Matriculas" ADD CONSTRAINT "Matriculas_ID_Curso_fkey" FOREIGN KEY ("ID_Curso") REFERENCES "Cursos"("ID_Curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresso_Aulas" ADD CONSTRAINT "Progresso_Aulas_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Progresso_Aulas" ADD CONSTRAINT "Progresso_Aulas_ID_Aula_fkey" FOREIGN KEY ("ID_Aula") REFERENCES "Aulas"("ID_Aula") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacoes" ADD CONSTRAINT "Avaliacoes_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacoes" ADD CONSTRAINT "Avaliacoes_ID_Curso_fkey" FOREIGN KEY ("ID_Curso") REFERENCES "Cursos"("ID_Curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trilhas" ADD CONSTRAINT "Trilhas_ID_Categoria_fkey" FOREIGN KEY ("ID_Categoria") REFERENCES "Categorias"("ID_Categoria") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trilhas_Cursos" ADD CONSTRAINT "Trilhas_Cursos_ID_Trilha_fkey" FOREIGN KEY ("ID_Trilha") REFERENCES "Trilhas"("ID_Trilha") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Trilhas_Cursos" ADD CONSTRAINT "Trilhas_Cursos_ID_Curso_fkey" FOREIGN KEY ("ID_Curso") REFERENCES "Cursos"("ID_Curso") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificados" ADD CONSTRAINT "Certificados_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificados" ADD CONSTRAINT "Certificados_ID_Curso_fkey" FOREIGN KEY ("ID_Curso") REFERENCES "Cursos"("ID_Curso") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Certificados" ADD CONSTRAINT "Certificados_ID_Trilha_fkey" FOREIGN KEY ("ID_Trilha") REFERENCES "Trilhas"("ID_Trilha") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinaturas" ADD CONSTRAINT "Assinaturas_ID_Usuario_fkey" FOREIGN KEY ("ID_Usuario") REFERENCES "Usuarios"("ID_Usuario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Assinaturas" ADD CONSTRAINT "Assinaturas_ID_Plano_fkey" FOREIGN KEY ("ID_Plano") REFERENCES "Planos"("ID_Plano") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamentos" ADD CONSTRAINT "Pagamentos_ID_Assinatura_fkey" FOREIGN KEY ("ID_Assinatura") REFERENCES "Assinaturas"("ID_Assinatura") ON DELETE RESTRICT ON UPDATE CASCADE;
