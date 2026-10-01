import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PlanosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.plano.create({ data });
  }

  findAll() {
    return this.prisma.plano.findMany();
  }

  findOne(id: string) {
    return this.prisma.plano.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.plano.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.plano.delete({ where: { id } });
  }
}
