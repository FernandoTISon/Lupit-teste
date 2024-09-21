import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { PrismaService } from 'src/database/prismaservice';
import { PlayerDTO } from 'src/dto/player.dto';

@Injectable()
export class PlayerService {
  constructor(private prisma: PrismaService) {}
  async create(data: PlayerDTO) {
    const { name, image } = data;
    if (!name || !image) return new Error('Name and image are required');
    const playerExists = await this.prisma.player.findFirst({
      where: {
        name: data.name,
        teamId: data.teamId,
        age: data.age,
      },
    });
    if (playerExists) throw new Error('Player already exists');
    const base64Data = image.replace(/^data:image\/\w+;base64,/, '');
    const fileBuffer = Buffer.from(base64Data, 'base64');
    const filePath = path.join(
      __dirname,
      '../..',
      '/public/uploads',
      `${name}.jpg`,
    );
    fs.writeFile(filePath, fileBuffer, (err) => {
      if (err) throw new Error('Error saving file');
    });
    const player = await this.prisma.player.create({
      data: {
        name: data.name,
        teamId: data.teamId,
        age: data.age,
        image: `${name}.jpg`,
      },
    });
    return player;
  }
  async findAll() {
    return this.prisma.player.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        Team: true,
        image: true,
      },
    });
  }

  async update(id: string, data: PlayerDTO) {
    const playerExists = await this.prisma.player.findUnique({
      where: {
        id,
      },
    });
    if (!playerExists) {
      throw new Error('player does not exists!');
    }

    return await this.prisma.player.update({
      data,
      where: {
        id,
      },
    });
  }

  async delete(id: string) {
    const playerExists = await this.prisma.player.findUnique({
      where: {
        id,
      },
    });
    if (!playerExists) {
      throw new Error('player does not exists!');
    }

    return await this.prisma.player.delete({
      where: {
        id,
      },
    });
  }
}
