import { Notification } from 'src/application/entities/notification';

export class PrismaNotificationMappers {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      recipientId: notification.recipientId,
      category: notification.category,
      content: notification.content.value,
      createAt: notification.createdAt,
    };
  }
}
