import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AssinaturasService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.assinatura.create({ data });
  }

  findAll() {
    return this.prisma.assinatura.findMany();
  }

  findOne(id: string) {
    return this.prisma.assinatura.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.assinatura.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.assinatura.delete({ where: { id } });
  }
}
