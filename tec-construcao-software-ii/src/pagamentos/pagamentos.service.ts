import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PagamentosService {
  constructor(private prisma: PrismaService) {}

  create(data: any) {
    return this.prisma.pagamento.create({ data });
  }

  findAll() {
    return this.prisma.pagamento.findMany();
  }

  findOne(id: number) {
    return this.prisma.pagamento.findUnique({ where: { id } });
  }

  update(id: number, data: any) {
    return this.prisma.pagamento.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.pagamento.delete({ where: { id } });
  }
}
