import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notificationRepository';

interface IGetRecipientNotificationRequest {
  recipientID: string;
}

export class GetRecipientNotification {
  constructor(private notificationsRepository: NotificationRepository) {}

  async execute(
    request: IGetRecipientNotificationRequest,
  ): Promise<Notification[]> {
    const { recipientID } = request;

    const notifications =
      await this.notificationsRepository.findManyByRecipientID(recipientID);

    return notifications;
  }
}
