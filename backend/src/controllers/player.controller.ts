import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PlayerDTO } from 'src/dto/player.dto';
import { PlayerService } from 'src/services/player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Post()
  async create(@Body() data: PlayerDTO) {
    return this.playerService.create(data);
  }
  @Get()
  async findAll() {
    return this.playerService.findAll();
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: PlayerDTO) {
    return this.playerService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.playerService.delete(id);
  }
}
