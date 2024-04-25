import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IComment } from './interfaces/comment.interface';
import { ITerrain } from 'src/terrains/interfaces/terrain.interface';
import { IUser } from 'src/users/interfaces/user.interface';


@Injectable()
export class CommentsService { // Mettez à jour le nom du service

  constructor(
    @InjectModel('comments') // Mettez à jour le nom du modèle
    private commentModel: Model<IComment> ,// Mettez à jour le nom de l'interface
    @InjectModel('terrains')
    private terrainModel:Model<ITerrain>,
    @InjectModel('users')
    private userModel:Model<IUser>
  ) { }

  async createComment(createCommentDto: CreateCommentDto): Promise<IComment> { // Mettez à jour le nom du DTO
    const newComment = new this.commentModel(createCommentDto); // Mettez à jour le nom du modèle
    await this.terrainModel.updateOne({_id:createCommentDto.terrain},
      {$push:{comments:newComment.id}})
    await this.userModel.updateOne({_id:createCommentDto.user},
      {$push:{comments:newComment.id}})
    return await newComment.save();
  }

  async findAll(): Promise<IComment[]> { // Mettez à jour le nom de l'interface
    const commentsData = await this.commentModel.find().exec(); // Mettez à jour le nom du modèle
    if (!commentsData || commentsData.length === 0) {
      throw new NotFoundException("Comments data does not found"); // Mettez à jour le message d'erreur
    }
    return commentsData;
  }

  async findOneComment(id: string): Promise<IComment> { // Mettez à jour le nom de l'interface
    const oneComment = await this.commentModel.findById(id).exec(); // Mettez à jour le nom du modèle
    if (!oneComment) {
      throw new NotFoundException("Comment does not found with this id"); // Mettez à jour le message d'erreur
    }
    return oneComment;
  }

  async updateComment(id: string, updateCommentDto: UpdateCommentDto): Promise<IComment> { // Mettez à jour le nom du DTO
    const updatedComment = await this.commentModel.findByIdAndUpdate(
      id,
      updateCommentDto,
      { new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    );
    if (!updatedComment) {
      throw new NotFoundException('Comment not found with this id'); // Mettez à jour le message d'erreur
    }
    return updatedComment;
  }

  async removeComment(id: string) {
    const deletedComment = await this.commentModel.findByIdAndDelete(id).exec(); // Mettez à jour le nom du modèle
    if (!deletedComment) {
      throw new NotFoundException('Comment not found with this id'); // Mettez à jour le message d'erreur
    }

    await this.terrainModel.updateOne({_id:deletedComment.terrain},
      {$pull:{comments:deletedComment._id}})
    await this.userModel.updateOne({_id:deletedComment.user},
      {$pull:{comments:deletedComment._id}})
    return deletedComment;
  }
}