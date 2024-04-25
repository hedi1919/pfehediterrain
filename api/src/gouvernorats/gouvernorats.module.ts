import { Module } from '@nestjs/common';
import { GouvernoratsService } from './gouvernorats.service';
import { GouvernoratsController } from './gouvernorats.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { GouvernoratSchema } from './entities/gouvernorat.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'gouvernorats', schema: GouvernoratSchema }])],
  controllers: [GouvernoratsController], // Mettez à jour le nom du contrôleur
  providers: [GouvernoratsService], // Mettez à jour le nom du service
})
export class GouvernoratsModule {}
