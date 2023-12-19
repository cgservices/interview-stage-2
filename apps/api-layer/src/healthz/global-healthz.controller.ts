import { Controller, Get } from '@nestjs/common';

import { GlobalHealthzService } from './global-healthz.service';

@Controller()
export class GlobalHealthzController {
  constructor(private readonly appService: GlobalHealthzService) {}

  @Get('/healthz')
  getHealthz() {
    return this.appService.getHealthz();
  }
  @Get('/healthz/*')
  getHealthzAll() {
    return this.appService.getHealthz();
  }
}
