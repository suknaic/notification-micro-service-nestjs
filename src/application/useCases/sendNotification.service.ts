import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { NotificationRepository } from '../repositories/notificationRepository';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotificationService {
  constructor(private notificationRepository: NotificationRepository) {}

  async execute({
    recipientId,
    content,
    category,
  }: ISendNotificationRequest): Promise<SendNotificationResponse> {
    {
      const notification = new Notification({
        recipientId,
        content: new Content(content),
        category,
      });
      await this.notificationRepository.create(notification);
      return { notification };
    }
  }
}
