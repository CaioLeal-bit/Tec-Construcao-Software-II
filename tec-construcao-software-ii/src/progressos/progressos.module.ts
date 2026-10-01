import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { ProgressosController } from './progressos.controller';
import { ProgressosService } from './progressos.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProgressosController],
  providers: [ProgressosService]
})
export class ProgressosModule {}
