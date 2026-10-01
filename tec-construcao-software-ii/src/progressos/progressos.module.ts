import { Module } from '@nestjs/common';
import { ProgressosController } from './progressos.controller';
import { ProgressosService } from './progressos.service';

@Module({
  controllers: [ProgressosController],
  providers: [ProgressosService]
})
export class ProgressosModule {}
