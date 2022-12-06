import { Controller, Get, StreamableFile, Param } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('diary')
export class DiaryController {
  @Get()
  getDiary(): StreamableFile {
    const diary = createReadStream(join(process.cwd(), '/context/diary.md'));
    return new StreamableFile(diary);
  }

  @Get(':diaryName')
  getSpecDiary(@Param() params): StreamableFile {
    const diary = createReadStream(
      join(process.cwd(), `/context/diary/${params.diaryName}.md`),
    );
    return new StreamableFile(diary);
  }
}
