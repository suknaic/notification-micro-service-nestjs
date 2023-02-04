import { HttpException } from '@nestjs/common';
import { randomUUID } from 'node:crypto';

import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { InMemoryNotificationRepository } from '../repositories/in-memory/InMemoryNotificationRepository';
import { CancelNotificationService } from './cancelNotification.service';
describe('[CancelNotificationService]', () => {
  let inMemoryNotificationRepository: InMemoryNotificationRepository;
  let cancelNotificationService: CancelNotificationService;
  let notification: Notification;

  beforeEach(() => {
    inMemoryNotificationRepository = new InMemoryNotificationRepository();
    cancelNotificationService = new CancelNotificationService(
      inMemoryNotificationRepository,
    );

    notification = new Notification({
      recipientId: randomUUID(),
      category: 'social',
      content: new Content('Você Recebeu uma Solicitação de Amizade'),
    });

    inMemoryNotificationRepository.create(notification);
  });

  it('should be able to cancel notification', () => {
    expect(
      async () =>
        await cancelNotificationService.execute({
          notificationId: notification.id,
        }),
    ).toBeTruthy();

    expect(inMemoryNotificationRepository.repository[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should not be able to cancel a non existing notification', () => {
    expect(
      async () =>
        await cancelNotificationService.execute({
          notificationId: 'non-existing-notification-id',
        }),
    ).rejects.toThrow(HttpException);
  });
});
