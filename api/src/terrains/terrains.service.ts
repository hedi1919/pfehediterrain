import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ITerrain } from './interfaces/terrain.interface';
import { IActivity } from 'src/activities/interfaces/activity.interface';
import { IGouvernorat } from 'src/gouvernorats/interfaces/gouvernorat.interface';

@Injectable()
export class TerrainsService { // Mettez à jour le nom du service

  // Inject Model
  constructor(
    @InjectModel('terrains') // Mettez à jour le nom du modèle
    private terrainModel: Model<ITerrain>,
    @InjectModel('activities')
    private activityModel:Model<IActivity>, // Mettez à jour le nom de l'interface
    @InjectModel('gouvernorats')
    private gouvernoratModel:Model<IGouvernorat> // Mettez à jour le nom de l'interface
    

  ) {}

  async createTerrain(createTerrainDto: CreateTerrainDto): Promise<ITerrain> { // Mettez à jour le nom du DTO

    const newTerrain = new this.terrainModel(createTerrainDto); // Mettez à jour le nom du modèle
    await this.activityModel.updateOne({_id:createTerrainDto.activity},
      {$push:{terrains:newTerrain.id}})
    await this.gouvernoratModel.updateOne({_id:createTerrainDto.gouvernorat},
        {$push:{terrains:newTerrain.id}})
    return await newTerrain.save();
  }

  async findAll(): Promise<ITerrain[]> { // Mettez à jour le nom de l'interface
    const terrainsData = await this.terrainModel.find().populate('activity').populate('gouvernorat').exec(); // Mettez à jour le nom du modèle
    if (!terrainsData || terrainsData.length === 0) {
      throw new NotFoundException("Terrains data does not found"); // Mettez à jour le message d'erreur
    }
    return terrainsData;
  }

  async findOneTerrain(id: string): Promise<ITerrain> { // Mettez à jour le nom de l'interface
    const oneTerrain = await this.terrainModel.findById(id).populate('activity').populate('gouvernorat').exec(); // Mettez à jour le nom du modèle
    if (!oneTerrain) {
      throw new NotFoundException("Terrain does not found with this id"); // Mettez à jour le message d'erreur
    }
    return oneTerrain;
  }

  async updateTerrain(id: string, updateTerrainDto: UpdateTerrainDto): Promise<ITerrain> { // Mettez à jour le nom du DTO
    const updatedTerrain = await this.terrainModel.findByIdAndUpdate(
      id,
      updateTerrainDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedTerrain) {
      throw new NotFoundException('Terrain not found with this id'); // Mettez à jour le message d'erreur
    }
    return updatedTerrain;
  }

  async removeTerrain(id: string) {
    const deletedTerrain = await this.terrainModel.findByIdAndDelete(id).exec(); // Mettez à jour le nom du modèle
    if (!deletedTerrain) {
      throw new NotFoundException('Terrain not found with this id'); // Mettez à jour le message d'erreur
    }

    await this.activityModel.updateOne({_id:deletedTerrain.activity},
      {$pull:{terrains:deletedTerrain._id}})
    await this.gouvernoratModel.updateOne({_id:deletedTerrain.gouvernorat},
        {$pull:{terrains:deletedTerrain._id}})
        
    return deletedTerrain;
  }
}