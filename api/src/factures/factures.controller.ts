import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus } from '@nestjs/common';
import { FacturesService } from './factures.service';
import { CreateFactureDto } from './dto/create-facture.dto';
import { UpdateFactureDto } from './dto/update-facture.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('factures') // Mettez à jour le chemin de l'API
@ApiTags('factures')

export class FacturesController { // Mettez à jour le nom du contrôleur
  constructor(private readonly facturesService: FacturesService) {}

  @Post()
  async create(@Body() createFactureDto: CreateFactureDto, @Res() response) {
    try {
      const newFacture = await this.facturesService.createFacture(createFactureDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Facture created successfully",
        status: HttpStatus.CREATED,
        data: newFacture
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
      const facturesData = await this.facturesService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Factures data found successfully!",
        status: HttpStatus.OK,
        data: facturesData
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
      const oneFacture = await this.facturesService.findOneFacture(id);
      return response.status(HttpStatus.OK).json({
        message: "Facture found by id",
        status: HttpStatus.OK,
        data: oneFacture
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
  async update(@Param('id') id: string, @Body() updateFactureDto: UpdateFactureDto, @Res() response) {
    try {
      const updatedFacture = await this.facturesService.updateFacture(id, updateFactureDto);
      return response.status(HttpStatus.OK).json({
        message: "Facture updated successfully",
        status: HttpStatus.OK,
        data: updatedFacture
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
      const deletedFacture = await this.facturesService.removeFacture(id);
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedFacture
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
