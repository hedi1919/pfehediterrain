import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus, UseInterceptors,  UploadedFiles } from '@nestjs/common';
import { TerrainsService } from './terrains.service';
import { CreateTerrainDto } from './dto/create-terrain.dto';
import { UpdateTerrainDto } from './dto/update-terrain.dto';
import { ApiBody, ApiConsumes, ApiTags } from '@nestjs/swagger';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('terrains')
@ApiTags('terrains')
export class TerrainsController {
  constructor(private readonly terrainsService: TerrainsService) {}

  @ApiBody({
    schema:{
      type:'object',
      properties:{
        title:{type:'string'},
        description:{type:'string'},
        price:{type:'string'},
        duration:{type:'string'},
        adress:{type:'string'},
        participants:{type:'string'},
        status:{type:'string'},
        surface:{type:'string'},
        latitude:{type:'string'},
        longitude:{type:'string'},
        activity:{type:'string'},
        gouvernorat:{type:'string'},
        files:{type:'array' , items:{type:'string' , format:'binary'}}

      }
    }
  })
  // configuration swagger
  @ApiConsumes("multipart/form-data")

  //configuration multer
  @UseInterceptors(
    FilesInterceptor("files",5, {
      storage:diskStorage({
        destination:'./upload/terrains',
        filename:(_request, files, callback)=>
        callback(null , `${new Date().getTime()}-${files.originalname}`)
      })
    })

  )
  @Post()
  async create(@Body() createTerrainDto: CreateTerrainDto, 
  @Res() response ,@UploadedFiles() files) {
    try {
      createTerrainDto.files=files.map((item)=>item.filename)
           
      const newTerrain = await this.terrainsService.createTerrain(createTerrainDto);
      return response.status(HttpStatus.CREATED).json({
        message: "Terrain created successfully",
        status: HttpStatus.CREATED,
        data: newTerrain
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
      const terrainsData = await this.terrainsService.findAll();
      return response.status(HttpStatus.OK).json({
        message: "Terrains data found successfully!",
        status: HttpStatus.OK,
        data: terrainsData
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
      const oneTerrain = await this.terrainsService.findOneTerrain(id);
      return response.status(HttpStatus.OK).json({
        message: "Terrain found by id",
        status: HttpStatus.OK,
        data: oneTerrain
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data: null
      });
    }
  }


   // configuration swagger
   @ApiBody({
    schema:{
      type:'object',
      properties:{
        title:{type:'string'},
        description:{type:'string'},
        price:{type:'string'},
        duration:{type:'string'},
        adress:{type:'string'},
        participants:{type:'string'},
        status:{type:'string'},
        surface:{type:'string'},
        latitude:{type:'string'},
        longitude:{type:'string'},
        activity:{type:'string'},
        gouvernorat:{type:'string'},
        files:{type:'array' , items:{type:'string' , format:'binary'}}

      }
    }
  })
   @ApiConsumes("multipart/form-data")

   //configuration multer
   @UseInterceptors(
     FilesInterceptor("files",5, {
       storage:diskStorage({
         destination:'./upload/terrains',
         filename:(_request, files, callback)=>
         callback(null , `${new Date().getTime()}-${files.originalname}`)
       })
     })
 
   )
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateTerrainDto: UpdateTerrainDto, @Res() response , @UploadedFiles() files) {
    try {
      
      if (files.length !=0) {
        updateTerrainDto.files=files?.map((item)=>item.filename)
      }
      const updatedTerrain = await this.terrainsService.updateTerrain(id, updateTerrainDto);
      return response.status(HttpStatus.OK).json({
        message: "Terrain updated successfully",
        status: HttpStatus.OK,
        data: updatedTerrain
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
      const deletedTerrain = await this.terrainsService.removeTerrain(id);
      return response.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: deletedTerrain
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