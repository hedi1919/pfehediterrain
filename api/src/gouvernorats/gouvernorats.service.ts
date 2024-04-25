import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGouvernoratDto } from './dto/create-gouvernorat.dto';
import { UpdateGouvernoratDto } from './dto/update-gouvernorat.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IGouvernorat } from './interfaces/gouvernorat.interface';


@Injectable()
export class GouvernoratsService {

  // Inject Model
  constructor(
    @InjectModel('gouvernorats')
    private gouvernoratModel: Model<IGouvernorat>
  ) { }

  async createGouvernorat(createGouvernoratDto: CreateGouvernoratDto): Promise<IGouvernorat> {
    const newGouvernorat = new this.gouvernoratModel(createGouvernoratDto);
    return await newGouvernorat.save();
  }

  async findAll(): Promise<IGouvernorat[]> {
    const gouvernoratsData = await this.gouvernoratModel.find().exec();
    if (!gouvernoratsData || gouvernoratsData.length === 0) {
      throw new NotFoundException("Gouvernorats data does not found");
    }
    return gouvernoratsData;
  }

  async findOneGouvernorat(id: string): Promise<IGouvernorat> {
    const oneGouvernorat = await this.gouvernoratModel.findById(id).exec();
    if (!oneGouvernorat) {
      throw new NotFoundException("Gouvernorat does not found with this id");
    }
    return oneGouvernorat;
  }

  async updateGouvernorat(id: string, updateGouvernoratDto: UpdateGouvernoratDto): Promise<IGouvernorat> {
    const updatedGouvernorat = await this.gouvernoratModel.findByIdAndUpdate(
      id,
      updateGouvernoratDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedGouvernorat) {
      throw new NotFoundException('Gouvernorat not found with this id');
    }
    return updatedGouvernorat;
  }

  async removeGouvernorat(id: string) {
    const deletedGouvernorat = await this.gouvernoratModel.findByIdAndDelete(id).exec();
    if (!deletedGouvernorat) {
      throw new NotFoundException('Gouvernorat not found with this id');
    }
    return deletedGouvernorat;
  }
}