import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from 'src/database/database.module';
import { TesteController } from 'src/http/teste.controller';

@Module({
  imports: [ConfigModule.forRoot(), DatabaseModule],
  controllers: [TesteController],
})
export class HttpModule {}
