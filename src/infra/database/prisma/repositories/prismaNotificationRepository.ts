import { Injectable } from '@nestjs/common';
import { Notification } from 'src/application/entities/notification';
import { NotificationRepository } from 'src/application/repositories/notificationRepository';

import { PrismaNotificationMappers } from '../mappers/prismaNotificationMappers';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PrismaNotificationRepository implements NotificationRepository {
  constructor(private prismaService: PrismaService) {}
  async create(notification: Notification): Promise<void> {
    const raw = PrismaNotificationMappers.toPrisma(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }
}
