import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';
import {DataService} from './data.service';

@Injectable({providedIn: 'root'})
export class UserService {
  private userSource$: Subject<User> = new Subject();
  public user$: Observable<User> = this.userSource$.asObservable().pipe(
    startWith(this.dataService.load('tpUser', {
      firstName: '',
      lastName: '',
      birthId: '',
      email: '',
      phone: '',
    })),
    shareReplay(1)
  );

  public constructor(private dataService: DataService) {}

  public setUser(user: User): void {
    this.dataService.save('tpUser', user);
    this.userSource$.next(user);
  }
}
