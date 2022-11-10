import { Controller, Get } from '@nestjs/common';

@Controller('think')
export class ThinkController {
  @Get()
  getThink(): any {
    const resArray = ['a', 'b', 'c'];
    let picArray = [
      'wallhaven-5d7vq1.png',
      'wallhaven-mdyqpm.jpg',
      'wallhaven-pkkm6p.png',
      'wallhaven-x1lqeo.png',
      'wallhaven-yjk6ml.jpg',
    ];

    let result = [];
    let count = picArray.length;
    for (let i = 0; i < 3; i++) {
      const random = Math.floor(Math.random() * count) + i;
      if (result.includes(picArray[random])) {
        continue;
      }
      result[i] = picArray[random];
      picArray[random] = picArray[i];
      count--;
    }

    return { a: picArray[0], b: picArray[1], c: picArray[2] };
  }
}
