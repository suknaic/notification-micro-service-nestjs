import { randomUUID } from 'node:crypto';

import { InMemoryNotificationRepository } from '../repositories/in-memory/InMemoryNotificationRepository';
import { SendNotificationService } from './sendNotification.service';

describe('[SendNotificationService]', () => {
  let fakeNotificationRepository: InMemoryNotificationRepository;
  let sendNotificationService: SendNotificationService;

  beforeEach(() => {
    fakeNotificationRepository = new InMemoryNotificationRepository();
    sendNotificationService = new SendNotificationService(
      fakeNotificationRepository,
    );
  });

  it('should be able to send a notification', async () => {
    const { notification } = await sendNotificationService.execute({
      recipientId: randomUUID(),
      category: 'social',
      content: 'Você Recebeu uma Solicitação de Amizade',
    });

    expect(fakeNotificationRepository.repository).toHaveLength(1);
    expect(fakeNotificationRepository.repository[0]).toEqual(notification);
  });
});
