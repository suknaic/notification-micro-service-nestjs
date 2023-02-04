import { Notification } from 'src/application/entities/notification';

import { NotificationRepository } from '../notificationRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public repository: Notification[];

  constructor() {
    this.repository = [];
  }
  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.repository.find(
      (notification) => notification.id === notificationId,
    );

    if (!notification) return null;

    return notification;
  }
  async save(notification: Notification): Promise<void> {
    const index = this.repository.findIndex((_not) => {
      _not.id === notification.id;
    });
    this.repository[index] = notification;
  }

  async create(notification: Notification): Promise<void> {
    this.repository.push(notification);
  }
}
