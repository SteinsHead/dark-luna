import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';

@Controller('about')
export class AboutController {
  @Get()
  getAbout(): StreamableFile {
    const about = createReadStream(join(process.cwd(), '/context/about.md'));
    return new StreamableFile(about);
  }
}
