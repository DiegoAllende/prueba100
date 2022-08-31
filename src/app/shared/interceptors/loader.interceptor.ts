import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderService } from '@shared/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  contReq = 0;

  constructor(
    public loaderService: LoaderService
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.contReq++;

    this.loaderService.isLoading.next(true);
    document.body.style.overflow = 'hidden'

    return next.handle(request).pipe(
      finalize(
        () => {
          this.contReq--;
          if (this.contReq === 0) {
            this.loaderService.isLoading.next(false);
            document.body.style.overflow = 'auto'
          }
        }
      )
    );
  }
}
