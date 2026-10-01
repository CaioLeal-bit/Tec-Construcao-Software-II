import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt'; // Biblioteca para hash de senha

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const { senha, ...rest } = createUserDto;

    // Gera um salt e cria o hash da senha enviada pelo DTO
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(senha, salt);

    // Salva o usuário no banco com a senha criptografada
    return this.prisma.usuario.create({
      data: {
        ...rest,
        senhaHash: hash, 
      },
    });
  }

  // Método essencial para buscar usuário pelo e-mail durante o login
  async findByEmail(email: string) {
    return this.prisma.usuario.findUnique({
      where: { email },
    });
  }

  findAll() {
    return this.prisma.usuario.findMany();
  }

  findOne(id: string) {
    return this.prisma.usuario.findUnique({ where: { id } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.usuario.update({
      where: { id },
      data: updateUserDto,
    });
  }

  remove(id: string) {
    return this.prisma.usuario.delete({ where: { id } });
  }
}
