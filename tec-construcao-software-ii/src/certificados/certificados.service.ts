import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CertificadosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.certificado.create({ data });
  }

  findAll() {
    return this.prisma.certificado.findMany();
  }

  findOne(id: string) {
    return this.prisma.certificado.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.certificado.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.certificado.delete({ where: { id } });
  }
}
