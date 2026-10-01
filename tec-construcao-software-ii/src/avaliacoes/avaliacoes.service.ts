import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AvaliacoesService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.avaliacao.create({ data });
  }

  findAll() {
    return this.prisma.avaliacao.findMany();
  }

  findOne(id: number) {
    return this.prisma.avaliacao.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.avaliacao.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.avaliacao.delete({ where: { id } });
  }
}
