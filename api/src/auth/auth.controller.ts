import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { Request } from 'express';
import { AccessTokenGuard } from 'src/guards/accessToken.guard';
import { ApiBasicAuth, ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { RefreshTokenGuard } from 'src/guards/refreshToken.guard';
import { UpdateUserDto } from 'src/users/dto/update-user.dto';
import { CreateEmailDto } from './dto/create-email.dto';

@Controller('auth')
@ApiTags('auth')

export class AuthController {
  constructor(private readonly authService: AuthService) {}

@Post('signin')
signIn(@Body() createLoginDto : CreateLoginDto){
  return this.authService.signIn(createLoginDto)
}

@ApiBearerAuth('access-token')
@UseGuards(AccessTokenGuard)
@Get('logout')
logout(@Req() req:Request){
  const userId=req.user['sub']
  return this.authService.logout(userId)
  
}


@ApiBearerAuth("refresh-token")
@UseGuards(RefreshTokenGuard)
@Get('refresh')
refreshToken(@Req() req:Request){
  const userId=req.user['sub']
  const refreshToken=req.user['refreshToken']
  return this.authService.refreshToken(userId , refreshToken)
}

@Patch("updatepass/:id")
async updatepass(@Param('id') id:string , @Body() updateUserDto:UpdateUserDto){
 return await this.authService.updatePassword(id , updateUserDto) 
}
@Patch("updateprofile/:id")
async updateProfile(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  return await this.authService.updateProfile(id, updateUserDto);
}

@Post('resetpassword')
async resetPassword(@Body() CreateEmailDto:CreateEmailDto){
  const tokenPassword=Math.floor(100000000000 +Math.random() *900000000).toString()
  const user={email:CreateEmailDto.email}
  await this.authService.resetPassword(user, tokenPassword)
}



}
