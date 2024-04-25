import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { json } from 'stream/consumers';
import { ApiTags } from '@nestjs/swagger';

@Controller('activities')
@ApiTags('activities')
export class ActivitiesController {
  constructor(private readonly activitiesService: ActivitiesService) {}

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto , @Res() response) {
    try {
      const newActivity = await this.activitiesService.createActivity(createActivityDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Activity created successfully",
        status: HttpStatus.CREATED,
        data: newActivity
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const activitiesData = await this.activitiesService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Activities data found successfully !",
        status: HttpStatus.OK,
        data: activitiesData
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const oneActivity = await this.activitiesService.findOneActivity(id);
      return response.status(HttpStatus.OK).json({
        message: "Activity found by id",
        status: HttpStatus.OK,
        data: oneActivity
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateActivityDto: UpdateActivityDto, @Res() response) {
    try {
      const updatedActivity = await this.activitiesService.updateActivity(id, updateActivityDto);
      return response.status(HttpStatus.OK).json({
        message: "Activity updated successfully",
        status: HttpStatus.OK,
        data: updatedActivity
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    try {
      const deletedActivity = await this.activitiesService.removeActivity(id);
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedActivity
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }
}
