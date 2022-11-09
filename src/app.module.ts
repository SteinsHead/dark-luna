import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiaryController } from './diary/diary.controller';

@Module({
  imports: [],
  controllers: [AppController, DiaryController],
  providers: [AppService],
})
export class AppModule {}
