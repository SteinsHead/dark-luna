import { Controller, Get, Query } from '@nestjs/common';

@Controller('think')
export class ThinkController {
  @Get()
  getThink(@Query('number') number?: number): any {
    if(number === undefined) number = 3;
    const resArray = ['a', 'b', 'c'];
    const picArray = [
      'wallhaven-5d7vq1.png',
      'wallhaven-mdyqpm.jpg',
      'wallhaven-pkkm6p.png',
      'wallhaven-x1lqeo.png',
      'wallhaven-yjk6ml.jpg',
    ];

    const result = [];
    for (let i = 0; i < number; i++) {
      const random = Math.floor(Math.random() * number);
      console.log(random);
      result.push(picArray[random]);
    }

    const foo = {};

    result.forEach((value, index) => {
      foo[index.toString()] = value;
      console.log(value);
    });

    console.log(result);

    return foo;
  }
}
