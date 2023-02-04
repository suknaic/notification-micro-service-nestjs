import { randomUUID } from 'crypto';

import { Content } from '../entities/content';
import { Notification, NotificationPros } from '../entities/notification';

type Override = Partial<NotificationPros>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: randomUUID(),
    category: 'social',
    content: new Content('Você Recebeu uma Solicitação de Amizade'),
    ...override,
  });
}
