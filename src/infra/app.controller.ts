import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateNotificationBody } from './create-notification-body';
import { NotificationService } from './notification.service';

@Controller('notifications')
export class AppController {
  constructor(private readonly notification: NotificationService) {}

  @Get()
  async list() {
    const notifications = await this.notification.getAllNotifications();
    return notifications;
  }

  @Post()
  async Create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    await this.notification.createNotification({
      recipientId,
      category,
      content,
    });
  }
}
