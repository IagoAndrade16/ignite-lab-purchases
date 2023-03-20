import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TesteController } from 'src/teste/teste.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [TesteController],
})
export class HttpModule {}
