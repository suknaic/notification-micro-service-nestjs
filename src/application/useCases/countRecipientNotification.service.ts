import { Injectable } from '@nestjs/common';

import { NotificationRepository } from '../repositories/notificationRepository';

interface ICountRecipientNotificationRequest {
  recipientID: string;
}

@Injectable()
export class CountRecipientNotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute(request: ICountRecipientNotificationRequest): Promise<number> {
    const { recipientID } = request;

    const count = await this.notificationRepository.countManyByRecipientID(
      recipientID,
    );

    return count;
  }
}
