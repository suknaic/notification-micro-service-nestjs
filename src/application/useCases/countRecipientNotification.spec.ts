import { randomUUID } from 'node:crypto';

import { Content } from '../entities/content';
import { Notification } from '../entities/notification';
import { InMemoryNotificationRepository } from '../repositories/in-memory/InMemoryNotificationRepository';
import { CountRecipientNotificationService } from './countRecipientNotification.service';

describe('[countNotificationService]', () => {
  let inMemoryNotificationRepository: InMemoryNotificationRepository;
  let countRecipientNotificationService: CountRecipientNotificationService;

  let notification: Notification;

  beforeEach(() => {
    inMemoryNotificationRepository = new InMemoryNotificationRepository();
    countRecipientNotificationService = new CountRecipientNotificationService(
      inMemoryNotificationRepository,
    );
  });

  it('should be able to count recipient notifications', async () => {
    notification = new Notification({
      recipientId: randomUUID(),
      category: 'social',
      content: new Content('Você Recebeu uma Solicitação de Amizade'),
    });

    await inMemoryNotificationRepository.create(notification);

    const count = await countRecipientNotificationService.execute({
      recipientID: notification.recipientId,
    });

    expect(count).toEqual(1);
  });
});
