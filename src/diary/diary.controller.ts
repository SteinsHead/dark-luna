import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('diary')
export class DiaryController {
  @Get()
  getDiary(): StreamableFile {
    const diary = createReadStream(join(process.cwd(), 'README.md'));
    return new StreamableFile(diary);
  }
}
