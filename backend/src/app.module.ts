import {
  MiddlewareConsumer,
  Module,
  NestMiddleware,
  NestModule,
} from '@nestjs/common';
import { PlayerController } from './controllers/player.controller';
import { PlayerService } from './services/player.service';
import { PrismaService } from './database/prismaservice';
import { TeamController } from './controllers/team.controller';
import { TeamService } from './services/team.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { NextFunction, Request, Response } from 'express';
import * as fs from 'fs';

// Middleware para servir arquivos estáticos
class StaticFilesMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const filePath = join(__dirname, '..', 'public', req.url);

    if (fs.existsSync(filePath)) {
      return res.sendFile(filePath);
    }

    next();
  }
}

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Diretório para arquivos estáticos
    }),
  ],
  controllers: [PlayerController, TeamController],
  providers: [PlayerService, PrismaService, TeamService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(StaticFilesMiddleware).forRoutes('uploads'); // Aplicar middleware a todas as rotas
  }
}
