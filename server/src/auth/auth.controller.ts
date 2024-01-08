import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtPublicGuard } from './guards/jwt-public.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(JwtPublicGuard)
  @Get('/hash-password')
  @HttpCode(HttpStatus.OK)
  hashPassword(@Request() req) {
    return this.authService.hashPassword(req.public.password);
  }

  @UseGuards(JwtPublicGuard)
  @Get('/compare-hash')
  @HttpCode(HttpStatus.OK)
  compareHash(@Request() req) {
    return this.authService.compareHashPassword(
      req.public.password,
      req.public.email,
    );
  }
}
