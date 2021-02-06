import { HttpService, Injectable } from '@nestjs/common';
import { Logger } from './logger/logger.decorator';
import { LoggerSrv } from './logger/logger.service';
@Injectable()
export class AppService {
  constructor(private http:HttpService,@Logger('AppService') private logger: LoggerSrv) {}
  getHello(): string {
    return 'Hello World!';
  }
  
}
