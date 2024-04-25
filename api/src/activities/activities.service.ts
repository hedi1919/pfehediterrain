import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IActivity } from './interfaces/activity.interface';

@Injectable()
export class ActivitiesService {

  // Inject Model
  constructor(
    @InjectModel('activities')
    private activityModel: Model<IActivity>
  ) { }

  async createActivity(createActivityDto: CreateActivityDto): Promise<IActivity> {
    const newActivity = new this.activityModel(createActivityDto);
    return await newActivity.save();
  }

  async findAll(): Promise<IActivity[]> {
    const activitiesData = await this.activityModel.find().exec();
    if (!activitiesData || activitiesData.length === 0) {
      throw new NotFoundException("Activities data does not found");
    }
    return activitiesData;
  }

  async findOneActivity(id: string): Promise<IActivity> {
    const oneActivity = await this.activityModel.findById(id).exec();
    if (!oneActivity) {
      throw new NotFoundException("Activity does not found with this id");
    }
    return oneActivity;
  }

  async updateActivity(id: string, updateActivityDto: UpdateActivityDto): Promise<IActivity> {
    const updatedActivity = await this.activityModel.findByIdAndUpdate(
      id,
      updateActivityDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedActivity) {
      throw new NotFoundException('Activity not found with this id');
    }
    return updatedActivity;
  }

  async removeActivity(id: string) {
    const deletedActivity = await this.activityModel.findByIdAndDelete(id).exec();
    if (!deletedActivity) {
      throw new NotFoundException('Activity not found with this id');
    }
    return deletedActivity;
  }
}
