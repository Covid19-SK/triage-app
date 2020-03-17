import {Injectable} from '@angular/core';
import {User} from './user';
import {Observable, Subject} from 'rxjs';
import {shareReplay, startWith} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class UserService {
  private userSource$: Subject<User> = new Subject();
  public user$: Observable<User> = this.userSource$.asObservable().pipe(
    startWith({
      firstName: '',
      lastName: '',
      birthId: '',
      email: '',
      phone: '',
    }),
    shareReplay(1)
  );
  public setUser(user: User): void {
    this.userSource$.next(user);
  }
}
