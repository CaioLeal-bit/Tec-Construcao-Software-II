import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TrilhasCursosController } from './trilhas-cursos.controller';
import { TrilhasCursosService } from './trilhas-cursos.service';

@Module({
  imports: [PrismaModule],
  controllers: [TrilhasCursosController],
  providers: [TrilhasCursosService]
})
export class TrilhasCursosModule {}
