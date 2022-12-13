import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DiaryController } from './diary/diary.controller';
import { ThinkController } from './think/think.controller';
import { AboutController } from './about/about.controller';
import { BooksController } from './diary/books/books.controller';
import { AnimationController } from './animation/animation.controller';

@Module({
  imports: [],
  controllers: [AppController, DiaryController, ThinkController, AboutController, BooksController, AnimationController],
  providers: [AppService],
})
export class AppModule {}
