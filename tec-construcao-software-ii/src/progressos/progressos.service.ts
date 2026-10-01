import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProgressosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.progressoAula.create({ data });
  }

  findAll() {
    return this.prisma.progressoAula.findMany();
  }

  findOne(id: number) {
    return this.prisma.progressoAula.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.progressoAula.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.progressoAula.delete({ where: { id } });
  }
}
