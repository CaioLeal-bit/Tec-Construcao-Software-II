import { PrismaModule } from '../prisma/prisma.module';
import { Module } from '@nestjs/common';
import { CertificadosController } from './certificados.controller';
import { CertificadosService } from './certificados.service';

@Module({
  imports: [PrismaModule],
  controllers: [CertificadosController],
  providers: [CertificadosService]
})
export class CertificadosModule {}
