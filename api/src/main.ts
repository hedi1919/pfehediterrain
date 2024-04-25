import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule,  } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin:['http://localhost:3000'],
    methods:["GET" , "POST" , "PATCH" , "DELETE"],
    credentials:true
  })
  
  const config=new DocumentBuilder()
  .setTitle("Pfe project")
  .setDescription("pfe")
  .addTag('users')
  .addTag('terrains') // Ajoutez le tag pour les terrains
  .addTag('activities')
  .addTag('gouvernorats')
  .addTag('comments')
  .addTag('admins')
  .addTag('auth')
  .addTag('customers')
  .addTag('provideres')
  .addTag('factures')
  .addTag('reservations')










  .addBearerAuth({
    description:'please enter token in the following format:bearer<JWT>' ,
    name:'Authorization',
    scheme:'Bearer',
    type:'http',
    in:'Header'

  },
  'access-token'
  )
  .addBearerAuth({
    description:'please enter refresh token in the following format:bearer<JWT>' ,
    name:'Authorization',
    scheme:'Bearer',
    type:'http',
    in:'Header'

  },
  'refresh-token'
  )
  
  .build()

  const document=SwaggerModule.createDocument(app,config)

  SwaggerModule.setup("api", app,document)

  await app.listen(4000);
}
bootstrap();
