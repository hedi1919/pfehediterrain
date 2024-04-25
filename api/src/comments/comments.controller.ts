import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Res } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('comments') // Mettez à jour le chemin de l'API
@ApiTags('comments')

export class CommentsController { // Mettez à jour le nom du contrôleur
  constructor(private readonly commentsService: CommentsService) {} // Mettez à jour le nom du service

  @Post()
  async create(@Body() createCommentDto: CreateCommentDto, @Res() response) { // Mettez à jour le nom du DTO
    try {
      const newComment = await this.commentsService.createComment(createCommentDto); // Mettez à jour le nom du service
      return response.status(HttpStatus.CREATED).json({
        message: "Comment created successfully", // Mettez à jour le message
        status: HttpStatus.CREATED,
        data: newComment
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Get()
  async findAll(@Res() response) {
    try {
      const commentsData = await this.commentsService.findAll(); // Mettez à jour le nom du service
      return response.status(HttpStatus.OK).json({
        message: "Comments data found successfully!", // Mettez à jour le message
        status: HttpStatus.OK,
        data: commentsData
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Res() response) {
    try {
      const oneComment = await this.commentsService.findOneComment(id); // Mettez à jour le nom du service
      return response.status(HttpStatus.OK).json({
        message: "Comment found by id", // Mettez à jour le message
        status: HttpStatus.OK,
        data: oneComment
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCommentDto: UpdateCommentDto, @Res() response) {
    try {
      const updatedComment = await this.commentsService.updateComment(id, updateCommentDto); // Mettez à jour le nom du service
      return response.status(HttpStatus.OK).json({
        message: "Comment updated successfully", // Mettez à jour le message
        status: HttpStatus.OK,
        data: updatedComment
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string, @Res() response) {
    try {
      const deletedComment = await this.commentsService.removeComment(id); // Mettez à jour le nom du service
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedComment
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }
}
