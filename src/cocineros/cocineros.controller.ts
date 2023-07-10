import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CocinerosService } from './cocineros.service';
import { CreateCocineroDto } from './dto/create-cocinero.dto';
import { UpdateCocineroDto } from './dto/update-cocinero.dto';

@Controller('cocineros')
export class CocinerosController {
  constructor(private readonly cocinerosService: CocinerosService) {}

  @Post()
  create(@Body() createCocineroDto: CreateCocineroDto) {
    return this.cocinerosService.create(createCocineroDto);
  }

  @Get()
  findAll() {
    return this.cocinerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cocinerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCocineroDto: UpdateCocineroDto) {
    return this.cocinerosService.update(+id, updateCocineroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cocinerosService.remove(+id);
  }
}
