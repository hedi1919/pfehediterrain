import { Controller, Get, Post, Body, Patch, Param, Delete, Res, HttpStatus , Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags } from '@nestjs/swagger';


@Controller('users')
@ApiTags('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
 async create(@Body() createUserDto: CreateUserDto , @Res() response) {
    try {
      const newUser=await this.usersService.createUser(createUserDto)
      // status 202===> created
      return response.status(HttpStatus.CREATED).json({
        message:"User created successfully",
        status:HttpStatus.CREATED,
        data:newUser

      })
      
    } catch (error) {

      return response.status(HttpStatus.BAD_REQUEST).json({
        message:error.message,
        status:HttpStatus.BAD_REQUEST,
        data:null
      })
      
    }

  }

  @Get("role")
  async findAllUsersByRole(@Res() response , @Query('role') role:string){
  try {
    const userByRole=await  this.usersService.findUserByRole(role)
    return response.status(HttpStatus.OK).json({
      message:"Users data found successfully with role !",
      status:HttpStatus.OK,
      data:userByRole
    })
   
  } catch (error) {
    return response .status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    
  })
}
  }
  
  @Get("email")
  async findUserByEmail(@Res() response , @Query('email') email:string){
  try {
    const userByEmail=await  this.usersService.findOneEmail(email)
    return response.status(HttpStatus.OK).json({
      message:"Users data found successfully with email !",
      status:HttpStatus.OK,
      data:userByEmail
    })
   
  } catch (error) {
    return response .status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    
  })
}
  }
  @Get()
async  findAll(@Res() response) {
  try {
    const usersData=await this.usersService.findAll()
    return response.status(HttpStatus.OK).json({
      message:"Users data found successfully !",
      status:HttpStatus.OK,
      data:usersData
    })
    
  } catch (error) {
    return response .status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null

    })
    
  } 
    return this.usersService.findAll();
  }

  @Get(':id')
 async findOne(@Param('id') id: string, @Res() response) {
   try {
    const oneUser=await this.usersService.findOneUser(id)
    return response.status(HttpStatus.OK).json({
      message:"User found by id",
      status:HttpStatus.OK,
      data:oneUser
    })
   } catch (error) {
    return response.status(HttpStatus.BAD_REQUEST).json({
      message:error.message,
      status:HttpStatus.BAD_REQUEST,
      data:null
    })
    
   }
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @Res() response) {
    try {
      const updatedUser = await this.usersService.updateUser(id, updateUserDto);
      return response.status(HttpStatus.OK).json({
        message: "User updated successfully",
        status: HttpStatus.OK,
        data: updatedUser
      });
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data:null
      });
    }
  }

  @Delete(':id')
 async remove(@Param('id') id: string, @Res() response) {
    try {
      const deletedUser= await this.usersService.removeUser(id)
      return response.status(HttpStatus.OK).json({
        status:HttpStatus.OK,
        data:deletedUser
      })
    } catch (error) {
      return response.status(HttpStatus.BAD_REQUEST).json({
        message: error.message,
        status: HttpStatus.BAD_REQUEST,
        data:null
    })
  }
  }

 
}
