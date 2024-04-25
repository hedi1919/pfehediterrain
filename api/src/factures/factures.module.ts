import { Module } from '@nestjs/common';
import { FacturesService } from './factures.service';
import { FacturesController } from './factures.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { FactureSchema } from './entities/facture.entity';
import { ReservationSchema } from 'src/reservations/entities/reservation.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'factures', schema: FactureSchema }]),

],
  controllers: [FacturesController],
  providers: [FacturesService],
})
export class FacturesModule {}
