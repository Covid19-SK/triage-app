import {Injectable} from '@angular/core';
import {isNil} from 'lodash-es';

// Temporary implementation. To be replaced with web service calls
@Injectable({providedIn: 'root'})
export class DataService {
  public load<T>(key: string, defaultValue: T): T {
    const user = JSON.parse(localStorage.getItem(key));
    return !isNil(user) ? user : defaultValue;
  }

  public save<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
