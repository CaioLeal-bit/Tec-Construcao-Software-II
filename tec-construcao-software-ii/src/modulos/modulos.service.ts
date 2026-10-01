import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ModulosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.modulo.create({ data });
  }

  findAll() {
    return this.prisma.modulo.findMany();
  }

  findOne(id: string) {
    return this.prisma.modulo.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.modulo.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.modulo.delete({ where: { id } });
  }
}
