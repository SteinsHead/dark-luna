import { Controller, Get, Param, StreamableFile } from '@nestjs/common';
import { createReadStream, readdir } from 'fs';
import { join } from 'path';

const booksPath = join(process.cwd(), '/context/anime');

const getAllFiles = (dirPaths): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readdir(booksPath, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

@Controller('anime')
export class AnimationController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async getBooks(): Promise<string[]> {
    const files = await getAllFiles(booksPath);

    return files;
  }

  @Get(':animeName')
  getSpecAnime(@Param() params): StreamableFile {
    const diary = createReadStream(
      join(process.cwd(), `/context/anime/${params.animeName}.md`),
    );
    return new StreamableFile(diary);
  }
}
