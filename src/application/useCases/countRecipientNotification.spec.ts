import { Notification } from '../entities/notification';
import { makeNotification } from '../factories/notificationFactory';
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
    notification = makeNotification();

    await inMemoryNotificationRepository.create(notification);

    const count = await countRecipientNotificationService.execute({
      recipientID: notification.recipientId,
    });

    expect(count).toEqual(1);
  });
});
