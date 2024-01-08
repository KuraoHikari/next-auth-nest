import { createZodDto } from '@wahyubucil/nestjs-zod-openapi';
import { User } from 'src/user/dto/user.dto';
import { z } from 'zod';

export class LoginUserDto extends createZodDto(User.omit({ username: true })) {}
