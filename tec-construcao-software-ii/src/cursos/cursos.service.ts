import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CursosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.curso.create({ data });
  }

  findAll() {
    return this.prisma.curso.findMany();
  }

  findOne(id: number) {
    return this.prisma.curso.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.curso.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.curso.delete({ where: { id } });
  }
}
