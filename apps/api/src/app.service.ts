import { Injectable } from '@nestjs/common';

//요청 받은거에서

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
