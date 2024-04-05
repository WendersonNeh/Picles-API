import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShelterModule } from './shelter/shelter.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ShelterModule,MongooseModule.forRoot('')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}


// mongodb+srv://wendersonneh:cafelande@cluster0.4l0m36c.mongodb.net/Picles?retryWrites=true&w=majority&appName=Cluster0