import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'node:crypto';
@Injectable()
export class NotificationService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllNotifications() {
    return await this.prisma.notification.findMany();
  }

  async createNotification({ recipientId, category, content }) {
    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        category,
        content,
        recipientId,
      },
    });
  }
}
