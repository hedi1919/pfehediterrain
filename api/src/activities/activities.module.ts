import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { activitySchema } from './entities/activity.entity';


@Module({
  imports: [MongooseModule.forFeature([{ name: 'activities', schema: activitySchema }])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
