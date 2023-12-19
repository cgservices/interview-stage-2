import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';

@Injectable()
export class GlobalHealthzService {
  getHealthz() {
    const version = readFileSync('version.txt');
    return `ok: ${version}`;
  }
}
