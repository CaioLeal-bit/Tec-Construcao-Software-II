import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AulasService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.aula.create({ data });
  }

  findAll() {
    return this.prisma.aula.findMany();
  }

  findOne(id: number) {
    return this.prisma.aula.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.aula.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.aula.delete({ where: { id } });
  }
}
