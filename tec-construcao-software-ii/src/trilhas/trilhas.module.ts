import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { TrilhasController } from './trilhas.controller';
import { TrilhasService } from './trilhas.service';

@Module({
  imports: [PrismaModule],
  controllers: [TrilhasController],
  providers: [TrilhasService]
})
export class TrilhasModule {}
