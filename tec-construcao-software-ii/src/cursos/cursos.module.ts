import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CursosController } from './cursos.controller';
import { CursosService } from './cursos.service';

@Module({
  imports: [PrismaModule],
  controllers: [CursosController],
  providers: [CursosService]
})
export class CursosModule {}
