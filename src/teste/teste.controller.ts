import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

@Controller('teste')
export class TesteController {
  @Get()
  @UseGuards(AuthorizationGuard)
  hello() {
    return 'ok';
  }
}
