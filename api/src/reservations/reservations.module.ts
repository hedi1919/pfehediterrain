import { Module } from '@nestjs/common';
import { ReservationsService } from './reservations.service';
import { ReservationsController } from './reservations.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservationSchema } from './entities/reservation.entity';
import { TerrainSchema } from 'src/terrains/entities/terrain.entity';
import { userSchema } from 'src/users/entities/user.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'reservations', schema: ReservationSchema }]),

  MongooseModule.forFeature([{name:'terrains' , schema:TerrainSchema}]),
  MongooseModule.forFeature([{name:'users' , schema:userSchema}]),

],

  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class ReservationsModule {}
