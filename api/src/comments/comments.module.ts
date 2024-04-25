import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentSchema } from './entities/comment.entity';
import { TerrainSchema } from 'src/terrains/entities/terrain.entity';
import { userSchema } from 'src/users/entities/user.entity';

@Module({
  imports:[MongooseModule.forFeature([{name:'comments', schema:CommentSchema}]),
  MongooseModule.forFeature([{name:'terrains' , schema:TerrainSchema}]),
  MongooseModule.forFeature([{name:'users' , schema:userSchema}]),


],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}