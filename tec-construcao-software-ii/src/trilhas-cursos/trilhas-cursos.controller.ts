import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrilhasCursosService } from './trilhas-cursos.service';

@Controller('trilhas-cursos')
export class TrilhasCursosController {
  constructor(private readonly service: TrilhasCursosService) {}

  @Post()
  create(@Body() data: any) {
    return this.service.create(data);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(id);
  }
}
