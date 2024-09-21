import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { TeamDTO } from 'src/dto/team.dto';
import { TeamService } from 'src/services/team.service';

@Controller('team')
export class TeamController {
  constructor(private readonly teamService: TeamService) {}

  @Post()
  async create(@Body() data: TeamDTO) {
    return this.teamService.create(data);
  }
  @Get()
  async findAll() {
    return this.teamService.findAll();
  }
  @Get(':id')
  async findTeamsAndPlayers(@Param('id') teamId: string) {
    return this.teamService.findTeamsAndPlayers(teamId);
  }
  @Put(':id')
  async update(@Param('id') id: string, @Body() data: TeamDTO) {
    return this.teamService.update(id, data);
  }
  @Delete(':id')
  async delete(@Param('id') teamId: string) {
    return this.teamService.delete(teamId);
  }
}
