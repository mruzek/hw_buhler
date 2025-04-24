import { Component } from '@angular/core';
import { map, Observable, shareReplay, timer } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  standalone: false,
})
export class HeaderComponent {
  // i found this nice thing on the internet
  time$: Observable<Date> = timer(0, 1000).pipe(
    map(tick => new Date()),
    shareReplay(1)
  );

  // irl would be loaded from some userService
  user: string = "Operator";
}
