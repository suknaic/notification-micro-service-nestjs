import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { NotificationRepository } from '../repositories/notificationRepository';

interface ICancelNotificationRequest {
  notificationId: string;
}

@Injectable()
export class CancelNotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute({ notificationId }: ICancelNotificationRequest): Promise<void> {
    {
      const notification = await this.notificationRepository.findById(
        notificationId,
      );

      if (!notification)
        throw new HttpException(
          'notification not found',
          HttpStatus.BAD_REQUEST,
        );

      notification.cancel();

      await this.notificationRepository.save(notification);
    }
  }
}
