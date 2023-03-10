import { Notification } from 'src/application/entities/notification';

import { NotificationRepository } from '../notificationRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public repository: Notification[];

  constructor() {
    this.repository = [];
  }
  async findManyByRecipientID(recipientID: string): Promise<Notification[]> {
    return await this.repository.filter(
      (notification) => notification.recipientId === recipientID,
    );
  }
  async countManyByRecipientID(recipientID: string): Promise<number> {
    return this.repository.filter(
      (notification) => notification.recipientId === recipientID,
    ).length;
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
