import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { GouvernoratsService } from './gouvernorats.service';
import { CreateGouvernoratDto } from './dto/create-gouvernorat.dto';
import { UpdateGouvernoratDto } from './dto/update-gouvernorat.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('gouvernorats') // Mettez à jour le chemin de l'API
@ApiTags('gouvernorats')

export class GouvernoratsController { // Mettez à jour le nom du contrôleur
  constructor(private readonly governoratsService: GouvernoratsService) {}

  @Post()
  async create(@Body() createGouvernoratDto: CreateGouvernoratDto, @Res() response) {
    try {
      const newGouvernorat = await this.governoratsService.createGouvernorat(createGouvernoratDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Gouvernorat created successfully",
        status: HttpStatus.CREATED,
        data: newGouvernorat
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
      const gouvernoratsData = await this.governoratsService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Gouvernorats data found successfully!",
        status: HttpStatus.OK,
        data: gouvernoratsData
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
      const oneGouvernorat = await this.governoratsService.findOneGouvernorat(id);
      return response.status(HttpStatus.OK).json({
        message: "Gouvernorat found by id",
        status: HttpStatus.OK,
        data: oneGouvernorat
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
  async update(@Param('id') id: string, @Body() updateGouvernoratDto: UpdateGouvernoratDto, @Res() response) {
    try {
      const updatedGouvernorat = await this.governoratsService.updateGouvernorat(id, updateGouvernoratDto);
      return response.status(HttpStatus.OK).json({
        message: "Gouvernorat updated successfully",
        status: HttpStatus.OK,
        data: updatedGouvernorat
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
      const deletedGouvernorat = await this.governoratsService.removeGouvernorat(id);
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedGouvernorat
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