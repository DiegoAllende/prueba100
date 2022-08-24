import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  

  constructor() { }

  autenticarServ(dataOut: any) {
    return of(dataOut).pipe(
      // delay(3000)
    );
  }

}
