import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream, readdir } from 'fs';
import { join } from 'path';

const booksPath = join(process.cwd(), '/context/diary');

const getAllFiles = (dirPaths): Promise<string[]> => {
  return new Promise((resolve, reject) => {
    readdir(booksPath, (err, files) => {
      if (err) reject(err);
      resolve(files);
    });
  });
};

@Controller('books')
export class BooksController {
  @Get()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async getBooks(): Promise<string[]> {
    const files = await getAllFiles(booksPath);

    return files;
  }
}
