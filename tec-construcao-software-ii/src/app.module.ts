import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CategoriasModule } from './categorias/categorias.module';
import { PlanosModule } from './planos/planos.module';
import { CursosModule } from './cursos/cursos.module';
import { ModulosModule } from './modulos/modulos.module';
import { AulasModule } from './aulas/aulas.module';
import { TrilhasModule } from './trilhas/trilhas.module';
import { TrilhasCursosModule } from './trilhas-cursos/trilhas-cursos.module';
import { AssinaturasModule } from './assinaturas/assinaturas.module';
import { PagamentosModule } from './pagamentos/pagamentos.module';
import { MatriculasModule } from './matriculas/matriculas.module';
import { ProgressosModule } from './progressos/progressos.module';
import { CertificadosModule } from './certificados/certificados.module';
import { AvaliacoesModule } from './avaliacoes/avaliacoes.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, CategoriasModule, PlanosModule, CursosModule, ModulosModule, AulasModule, TrilhasModule, TrilhasCursosModule, AssinaturasModule, PagamentosModule, MatriculasModule, ProgressosModule, CertificadosModule, AvaliacoesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
