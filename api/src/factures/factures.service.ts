import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IFacture } from './interfaces/facture.interface';
import { IReservation } from 'src/reservations/interfaces/reservation.interface';

@Injectable()
export class FacturesService {

  // Inject Model
  constructor(
    @InjectModel('factures')
    private factureModel: Model<IFacture>,
   
  ) { }

  async createFacture(createFactureDto: CreateFactureDto): Promise<IFacture> {
    const newFacture = new this.factureModel(createFactureDto);
   
    return await newFacture.save();
  }

  async findAll(): Promise<IFacture[]> {
    const facturesData = await this.factureModel.find().exec();
    if (!facturesData || facturesData.length === 0) {
      throw new NotFoundException("Factures data does not found");
    }
    return facturesData;
  }

  async findOneFacture(id: string): Promise<IFacture> {
    const oneFacture = await this.factureModel.findById(id).exec();
    if (!oneFacture) {
      throw new NotFoundException("Facture does not found with this id");
    }
    return oneFacture;
  }

  async updateFacture(id: string, updateFactureDto: UpdateFactureDto): Promise<IFacture> {
    const updatedFacture = await this.factureModel.findByIdAndUpdate(
      id,
      updateFactureDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedFacture) {
      throw new NotFoundException('Facture not found with this id');
    }
    return updatedFacture;
  }

  async removeFacture(id: string) {
    const deletedFacture = await this.factureModel.findByIdAndDelete(id).exec();
    if (!deletedFacture) {
      throw new NotFoundException('Facture not found with this id');
    }
    



    return deletedFacture;
  }
}
