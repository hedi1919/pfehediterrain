import { Injectable , NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel  } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class UsersService {

// inject Model
  constructor(
    @InjectModel('users')
    private userModel:Model<IUser>
  ){}



async  createUser(createUserDto: CreateUserDto):Promise<IUser> {
  const newUser=new this.userModel(createUserDto)
return await newUser.save()    
  }

 async  findAll():Promise<IUser[]> {

    const usersData=await this.userModel.find().exec()
    if (!usersData || usersData.length ===0){
      throw new NotFoundException("Users data does not found")
    }
    return usersData
  }

async  findOneUser(id: string):Promise<IUser> {
  const oneUser=await this.userModel.findById(id).exec()
  if(!oneUser){
    throw new NotFoundException("User does not found this id" )

  }
    return oneUser
  }

async updateUser(id: string, updateUserDto: UpdateUserDto):Promise<IUser> {
   const updateUser=await this.userModel.findByIdAndUpdate(
    id, 
    updateUserDto,
  {new: true }, // Utilisez { new: true } pour renvoyer le document mis à jour au lieu de l'ancien
    
    )
    if (!updateUser) {
      throw new NotFoundException('User not found with this id')
    }

    return updateUser;

  }

  async removeUser(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();

  if (!deletedUser) 
   { throw new NotFoundException('User not found with this id')}
  
    return deletedUser
}


async findUserByRole(role:string):Promise<IUser[]>{
  const userByRole=await this.userModel.find({role:role})
  if(!userByRole) throw new NotFoundException("user does not found")
  return userByRole
}

async findOneEmail(email:string):Promise<IUser>{
  const userByEmail=await this.userModel.findOne({email:email})
  if(!userByEmail) throw new NotFoundException("user does not found")
  return userByEmail
}

async findUserAndResetPassword(email:any, password:any):Promise<IUser>{
  return this.userModel.findOneAndUpdate(email , password)
}
  
}
