import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './config/config';
import { LoggerModule } from './logger/logger.module';
@Module({
  imports: [ConfigModule.forRoot({isGlobal:true,load:[config]}),LoggerModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
