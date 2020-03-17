import {Injectable} from '@angular/core';
import {DataService} from './data.service';
import {isNil} from 'lodash-es';
import * as uuidv4 from 'uuid/v4';

@Injectable({providedIn: 'root'})
export class AuthService {
  public get id(): string {
    const i = this.dataService.load('tpId', undefined);
    if (isNil(i)) {
      const newId = uuidv4();
      this.dataService.save('tpId', newId);
      return newId;
    }
    return i;
  }
  public constructor(private dataService: DataService) {}
}
