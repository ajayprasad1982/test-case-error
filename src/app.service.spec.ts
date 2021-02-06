import { AppService } from './app.service';
import { Test } from '@nestjs/testing';
import { getLoggerToken } from './logger/logger.utils';
import { HttpService } from '@nestjs/common';

describe('AppService', () => {
  let service: AppService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        AppService,
        {
          provide: getLoggerToken('AppService'),
          useValue: {
          },
        },
        {
          provide: HttpService,
          useValue: {
          },
        }
      ]
    }).compile();

    service = module.get<AppService>(AppService);
  });

  describe('getHello', () => {
    it('should return "Hello, World!"', () => {
      expect(service.getHello()).toBe('Hello World!');
    });
    it('should return "Hello, Tester!"', () => {
      expect(service.getHello()).toBe('Hello World!');
    });
  });
});
