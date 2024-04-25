import { Module } from '@nestjs/common';
import { TerrainsService } from './terrains.service';
import { TerrainsController } from './terrains.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { TerrainSchema } from './entities/terrain.entity';
import { activitySchema } from 'src/activities/entities/activity.entity';
import { GouvernoratSchema } from 'src/gouvernorats/entities/gouvernorat.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'terrains', schema: TerrainSchema }]), 
MongooseModule.forFeature([{name:'activities' , schema:activitySchema}]),
MongooseModule.forFeature([{name:'gouvernorats' , schema:GouvernoratSchema}])
], // Mettez à jour le nom et le schéma

  
controllers: [TerrainsController], // Mettez à jour le nom du contrôleur
  providers: [TerrainsService], // Mettez à jour le nom du service
})
export class TerrainsModule {}
