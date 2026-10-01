import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MatriculasService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.matricula.create({ data });
  }

  findAll() {
    return this.prisma.matricula.findMany();
  }

  findOne(id: string) {
    return this.prisma.matricula.findUnique({ where: { id } });
  }

  update(id: string, data: any) {
    return this.prisma.matricula.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.matricula.delete({ where: { id } });
  }
}
