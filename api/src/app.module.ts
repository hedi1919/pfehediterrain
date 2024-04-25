import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { ActivitiesModule } from './activities/activities.module';
import { GouvernoratsModule } from './gouvernorats/gouvernorats.module';
import { TerrainsModule } from './terrains/terrains.module';
import { CommentsModule } from './comments/comments.module';
import { AdminsModule } from './admins/admins.module';
import { CustomersModule } from './customers/customers.module';
import { ProvidersModule } from './providers/providers.module';
import { AuthModule } from './auth/auth.module';
import { FacturesModule } from './factures/factures.module';
import { ReservationsModule } from './reservations/reservations.module';
import { ConfigModule } from '@nestjs/config';
import { MailerModule } from '@nestjs-modules/mailer';
import Handlebars from 'handlebars';
import { join } from 'path';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017',{dbName:'pfeterrain'}),UsersModule, 
  ActivitiesModule, 
  GouvernoratsModule,
   TerrainsModule,
    CommentsModule, AdminsModule, 
    CustomersModule, 
    ProvidersModule, 
     FacturesModule,
      ReservationsModule,
      AuthModule,
    ConfigModule.forRoot({isGlobal:true}),
  MailerModule.forRoot({
    transport:{ host: "sandbox.smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4723f8d5fc1518",
      pass: "3afacc68e27c33"
    }

  },
  defaults:{
    from:"NO REPLAY <email>"
  },
  template:{
    dir:join(__dirname , 'templates'),
    adapter:new HandlebarsAdapter(),
    options:{
      strict:true
    }
  }
})
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
