import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ModulosService } from './modulos.service';

@Controller('modulos')
export class ModulosController {
  constructor(private readonly service: ModulosService) {}

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
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: any) {
    return this.service.update(+id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
