import { Injectable } from '@angular/core';
import { ApiService } from '@/api/api.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Guest, PayloadAddAuthor } from '@/store/guests/guests.reducer';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable({
  providedIn: 'root'
})
export class GuestsService {
  constructor(private api: ApiService) { }

  private bootstrapGuest(guest: Guest): Guest {
    const email = guest.email.toLowerCase();
    const hash = Md5.hashStr(email);

    return {
      ...guest,
      email,
      avatar: `https://www.gravatar.com/avatar/${hash}`
    };
  }

  loadGuests(): Observable<Guest[]> {
    return this.api.get(`/users?sort=desc`).pipe(
      map((guests: Guest[]) =>
        guests.map((guest) => this.bootstrapGuest(guest))
      ));
  }

  addAuthor(body: PayloadAddAuthor): Observable<any> {
    return this.api.post('/users', body).pipe(map((guest: Guest) => this.bootstrapGuest(guest)));
  }
}
