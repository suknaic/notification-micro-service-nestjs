import { Content } from '../entities/content';
import { Notification } from '../entities/notification';

interface ISendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}
interface SendNotificationResponse {
  notification: Notification;
}

export class SendNotificationService {
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

      return { notification };
    }
  }
}
