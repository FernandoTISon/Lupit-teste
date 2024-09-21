import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prismaservice';
import { TeamDTO } from 'src/dto/team.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TeamService {
  constructor(private prisma: PrismaService) {}
  async create(data: TeamDTO) {
    const { name, teamImage } = data;
    if (!name || !teamImage) return new Error('Name and image are required');
    const teamExists = await this.prisma.team.findFirst({
      where: {
        name: name,
      },
    });
    const base64Data = teamImage.replace(/^data:image\/\w+;base64,/, '');
    const fileBuffer = Buffer.from(base64Data, 'base64');
    const filePath = path.join(
      __dirname,
      '../..',
      'public/uploads',
      `${name}.jpg`,
    );
    fs.writeFile(filePath, fileBuffer, (err) => {
      if (err) throw new Error('Error saving file');
    });
    if (teamExists) {
      throw new Error('team already exists');
    }
    const team = await this.prisma.team.create({
      data: {
        name,
        teamImage: `${name}.jpg`,
      },
    });
    return team;
  }
  async findAll() {
    return this.prisma.team.findMany({
      select: {
        teamId: true,
        name: true,
        teamImage: true,
      },
    });
  }
  async findTeamsAndPlayers(teamId: string) {
    return await this.prisma.team.findUnique({
      where: { teamId: teamId },
      include: {
        Player: {
          select: {
            id: true,
            name: true,
            age: true,
            image: true,
          },
        },
      },
    });
  }

  async update(teamId: string, data: TeamDTO) {
    const teamExists = await this.prisma.team.findUnique({
      where: {
        teamId,
      },
    });
    if (!teamExists) {
      throw new Error('team does not exists!');
    }

    return await this.prisma.team.update({
      data,
      where: {
        teamId,
      },
    });
  }

  async delete(teamId: string) {
    const teamExists = await this.prisma.team.findUnique({
      where: { teamId },
      include: { Player: true },
    });
    if (!teamExists) {
      throw new Error('team does not exists!');
    }
    await this.prisma.player.deleteMany({
      where: { teamId: teamId },
    });
    return await this.prisma.team.delete({
      where: { teamId },
    });
  }
}
