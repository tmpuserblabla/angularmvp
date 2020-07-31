import { Injectable } from '@angular/core';
import { ApiService } from '@/api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guest } from '~/app/store/guests/guests.reducer';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  constructor(private api: ApiService) { }

  loadGuests(): Observable<Guest[]> {
    return this.api.get(`/users`).pipe(map((guests: Guest[]) => {
      return guests.map((guest) => {
        const email = guest.email.toLowerCase();
        const hash = Md5.hashStr(email);

        return {
          ...guest,
          email,
          avatar: `https://www.gravatar.com/avatar/${hash}`
        };
      });
    }));
  }
}
