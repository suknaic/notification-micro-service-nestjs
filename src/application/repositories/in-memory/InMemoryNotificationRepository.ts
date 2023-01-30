import { Notification } from 'src/application/entities/notification';

import { NotificationRepository } from '../notificationRepository';

export class InMemoryNotificationRepository implements NotificationRepository {
  public repository: Notification[];

  constructor() {
    this.repository = [];
  }

  async create(notification: Notification): Promise<void> {
    this.repository.push(notification);
  }
}
