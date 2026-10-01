import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TrilhasService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.trilha.create({ data });
  }

  findAll() {
    return this.prisma.trilha.findMany();
  }

  findOne(id: number) {
    return this.prisma.trilha.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.trilha.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.trilha.delete({ where: { id } });
  }
}
