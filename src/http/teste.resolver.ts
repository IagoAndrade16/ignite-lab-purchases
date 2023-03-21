import { UseGuards } from '@nestjs/common';
import { Query } from '@nestjs/graphql';
import { PrismaService } from 'src/database/prisma/prisma.service';
import { AuthorizationGuard } from 'src/http/auth/authorization.guard';
import { Resolver } from 'type-graphql';

@Resolver()
export class TestResolver {
  constructor(private prisma: PrismaService) {}
  @Query(() => String)
  // @UseGuards(AuthorizationGuard)
  hello() {
    return 'Hello graphql';
  }
}
