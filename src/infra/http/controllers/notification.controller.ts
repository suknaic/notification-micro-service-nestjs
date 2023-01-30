import { Body, Controller, Post } from '@nestjs/common';
import { SendNotificationService } from 'src/application/useCases/sendNotification.service';

import { CreateNotificationBody } from '../dtos/create-notification-body';

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

    return notification;
  }
}
