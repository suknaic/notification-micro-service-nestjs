import { Module } from '@nestjs/common';
import { SendNotificationService } from 'src/application/useCases/sendNotification.service';

import { databaseModule } from '../database/database.module';
import { NotificationController } from './controllers/notification.controller';
@Module({
  imports: [databaseModule],
  controllers: [NotificationController],
  providers: [SendNotificationService],
})
export class HttpModule {}
