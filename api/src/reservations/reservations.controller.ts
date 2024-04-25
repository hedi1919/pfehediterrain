import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('reservations') // Mettez à jour le chemin de l'API
@ApiTags('reservations')

export class ReservationsController { // Mettez à jour le nom du contrôleur
  constructor(private readonly reservationsService: ReservationsService) {}

  @Post()
  async create(@Body() createReservationDto: CreateReservationDto, @Res() response) {
    try {
      const newReservation = await this.reservationsService.createReservation(createReservationDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Reservation created successfully",
        status: HttpStatus.CREATED,
        data: newReservation
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
      const reservationsData = await this.reservationsService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Reservations data found successfully!",
        status: HttpStatus.OK,
        data: reservationsData
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
      const oneReservation = await this.reservationsService.findOneReservation(id);
      return response.status(HttpStatus.OK).json({
        message: "Reservation found by id",
        status: HttpStatus.OK,
        data: oneReservation
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
  async update(@Param('id') id: string, @Body() updateReservationDto: UpdateReservationDto, @Res() response) {
    try {
      const updatedReservation = await this.reservationsService.updateReservation(id, updateReservationDto);
      return response.status(HttpStatus.OK).json({
        message: "Reservation updated successfully",
        status: HttpStatus.OK,
        data: updatedReservation
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
      const deletedReservation = await this.reservationsService.removeReservation(id);
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedReservation
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
