import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductosModule } from './productos/productos.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ProductosModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.DB_AUTH),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
