import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CategoriasService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.categoria.create({ data });
  }

  findAll() {
    return this.prisma.categoria.findMany();
  }

  findOne(id: number) {
    return this.prisma.categoria.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.categoria.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.categoria.delete({ where: { id } });
  }
}
