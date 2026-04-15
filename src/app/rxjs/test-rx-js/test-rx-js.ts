import { Component, inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { filter, map, Observable } from 'rxjs';

@Component({
  selector: 'app-test-rx-js',
  imports: [],
  templateUrl: './test-rx-js.html',
  styleUrl: './test-rx-js.css',
})
export class TestRxJs {
   myObservable$: Observable<number>;
   toaster = inject(ToastrService)
   constructor() {
   this.myObservable$ = new Observable((observer) => {
      let i = 5;
      const intervalIndex = setInterval(() => {
        if (!i) {
          observer.complete();
          clearInterval(intervalIndex);
        } else {
          observer.next(i--);
        }
      }, 1000);
    });
    this.myObservable$.subscribe({
      next: value => {
        console.log(value)
      }
    });
    // setTimeout(() => {
      this.myObservable$
      // 5 4 3 2 1
      .pipe(
        map(value => value * 3),
        // 15 12 9 6 3
        filter(value => value % 2 == 0)
        // 12 6
      )
      .subscribe({
        next: (value) => {
          this.toaster.info('' + value);
        },
        complete: () => {
         this.toaster.error('Fin!!!!')
        }
      });
    // }, 3000)
   }
   // 5 4 3 2 1

}
