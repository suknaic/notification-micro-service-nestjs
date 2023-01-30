import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationService } from '@usecases/sendNotification.service';

import { CreateNotificationBody } from '../dtos/create-notification-body';
import { NotificationMapperView } from '../mappers-views/notificationMapperViews';

@Controller('notifications')
export class NotificationController {
  constructor(private sendNotificationService: SendNotificationService) {}

  @Post()
  async Create(@Body() body: CreateNotificationBody) {
    const { recipientId, category, content } = body;

    const { notification } = await this.sendNotificationService.execute({
      recipientId,
      category,
      content,
    });

    return NotificationMapperView.toHTTP(notification);
  }
}
