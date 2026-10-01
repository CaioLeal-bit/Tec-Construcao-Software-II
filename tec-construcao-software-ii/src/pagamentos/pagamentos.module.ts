import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { PagamentosController } from './pagamentos.controller';
import { PagamentosService } from './pagamentos.service';

@Module({
  imports: [PrismaModule],
  controllers: [PagamentosController],
  providers: [PagamentosService]
})
export class PagamentosModule {}
