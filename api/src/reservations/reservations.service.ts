import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IReservation } from './interfaces/reservation.interface';
import { ITerrain } from 'src/terrains/interfaces/terrain.interface';
import { IUser } from 'src/users/interfaces/user.interface';

@Injectable()
export class ReservationsService {

  // Inject Model
  constructor(
    @InjectModel('reservations')
    private reservationModel: Model<IReservation>, 
    @InjectModel('terrains')
    private terrainModel: Model<ITerrain>, // Mettez à jour le nom de l'interface
    @InjectModel('users')
    private userModel: Model<IUser>, // Mettez à jour le nom de l'interface
  ) { }

  async createReservation(createReservationDto: CreateReservationDto): Promise<IReservation> {
    const newReservation = new this.reservationModel(createReservationDto);
    await this.terrainModel.updateOne({_id:createReservationDto.terrain},
      {$push:{reservations:newReservation.id}})
      await this.userModel.updateOne({_id:createReservationDto.user},
        {$push:{reservations:newReservation.id}})
    return await newReservation.save();
  }

  async findAll(): Promise<IReservation[]> {
    const reservationsData = await this.reservationModel.find().exec();
    if (!reservationsData || reservationsData.length === 0) {
      throw new NotFoundException("Reservations data does not found");
    }
    return reservationsData;
  }

  async findOneReservation(id: string): Promise<IReservation> {
    const oneReservation = await this.reservationModel.findById(id).exec();
    if (!oneReservation) {
      throw new NotFoundException("Reservation does not found with this id");
    }
    return oneReservation;
  }

  async updateReservation(id: string, updateReservationDto: UpdateReservationDto): Promise<IReservation> {
    const updatedReservation = await this.reservationModel.findByIdAndUpdate(
      id,
      updateReservationDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedReservation) {
      throw new NotFoundException('Reservation not found with this id');
    }
    return updatedReservation;
  }

  async removeReservation(id: string) {
    const deletedReservation = await this.reservationModel.findByIdAndDelete(id).exec();
    if (!deletedReservation) {
      throw new NotFoundException('Reservation not found with this id');
    }

    await this.terrainModel.updateOne({_id:deletedReservation.terrain},
      {$pull:{reservations:deletedReservation._id}})
    await this.userModel.updateOne({_id:deletedReservation.user},
        {$pull:{reservations:deletedReservation._id}})
    return deletedReservation;
  }
}
