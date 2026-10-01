import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrilhasCursosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.trilhaCurso.create({ data });
  }

  findAll() {
    return this.prisma.trilhaCurso.findMany();
  }

  findOne(id: number) {
    return this.prisma.trilhaCurso.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.trilhaCurso.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.trilhaCurso.delete({ where: { id } });
  }
}
