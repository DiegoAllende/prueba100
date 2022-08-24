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

  constructor(
    public loaderService: LoaderService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.isLoading.next(true);
    document.body.style.overflow = 'hidden'

    return next.handle(request).pipe(
      finalize(
        () => {
          console.log('finalize');
          this.loaderService.isLoading.next(false);
          document.body.style.overflow = 'auto'
        }
      )
    );
  }
}
