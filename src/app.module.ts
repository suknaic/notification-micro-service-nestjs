import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { NotificationService } from './notification.service';
import { PrismaService } from './prisma.service';
@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService, NotificationService],
})
export class AppModule {}
