import { Controller, Get, UseGuards } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';

@Controller('teste')
export class TesteController {
  constructor(private prisma: PrismaService) {}
  @Get()
  @UseGuards(AuthorizationGuard)
  hello() {
    return this.prisma.customer.findMany();
  }
}
