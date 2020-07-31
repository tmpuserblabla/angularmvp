import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl } from '@angular/forms';
import { State } from '@/store';
import { loadGuests } from '@/store/guests/guests.actions';
import { Observable } from 'rxjs';
import { Guest } from '@/store/guests/guests.reducer';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-guest-book',
  templateUrl: './guest-book.component.html',
  styleUrls: ['./guest-book.component.scss']
})
export class GuestBookComponent implements OnInit {
  guests$: Observable<Guest[]>;

  authorForm = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(
    private store: Store<State>
  ) { }


  addAuthor(): void {
    const { value } = this.authorForm;
    // this.api.post('/users', {
    //   name: value.fullName,
    //   email: value.email,
    //   message: value.message
    // }).subscribe(() => {
    //   this.authorForm.reset();
    // });
  }

  ngOnInit(): void {
    this.store.dispatch(loadGuests());

    this.guests$ = this.store.select('guests').pipe(map(({ guests }) => {
      return guests;
    }));
  }
}
