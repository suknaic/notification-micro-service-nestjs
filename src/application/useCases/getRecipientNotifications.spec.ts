import { Notification } from '../entities/notification';
import { makeNotification } from '../factories/notificationFactory';
import { InMemoryNotificationRepository } from '../repositories/in-memory/InMemoryNotificationRepository';
import { GetRecipientNotification } from './getRecipientNotifications.service';

describe('[getRecipientNotification]', () => {
  let inMemoryNotificationRepository: InMemoryNotificationRepository;
  let getRecipientNotifications: GetRecipientNotification;

  let notification: Notification;

  beforeEach(() => {
    inMemoryNotificationRepository = new InMemoryNotificationRepository();
    getRecipientNotifications = new GetRecipientNotification(
      inMemoryNotificationRepository,
    );
  });

  it('should be able to receive recipient notifications', async () => {
    await inMemoryNotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );
    await inMemoryNotificationRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    const notifications = await getRecipientNotifications.execute({
      recipientID: 'recipient-1',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1' }),
        expect.objectContaining({ recipientId: 'recipient-1' }),
      ]),
    );
  });
});
