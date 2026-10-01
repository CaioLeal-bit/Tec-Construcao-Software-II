import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { AvaliacoesController } from './avaliacoes.controller';
import { AvaliacoesService } from './avaliacoes.service';

@Module({
  imports: [PrismaModule],
  controllers: [AvaliacoesController],
  providers: [AvaliacoesService]
})
export class AvaliacoesModule {}
