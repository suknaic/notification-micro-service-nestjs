import { randomUUID } from 'node:crypto';

import { SendNotificationService } from './sendNotification.service';

describe('[SendNotificationService]', () => {
  it('should be able to send a notification', async () => {
    const sendNotificationService = new SendNotificationService();

    const response = await sendNotificationService.execute({
      recipientId: randomUUID(),
      category: 'social',
      content: 'Você Recebeu uma Solicitação de Amizade',
    });

    expect(response).toBeTruthy();
  });
});
