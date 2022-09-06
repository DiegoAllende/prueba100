import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { ErrorRespModel } from '@shared/models/generico/http.model';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {
  errorOut: ErrorRespModel = {
    intCodigo: 0,
    strDescripcion: "",
    strAdicional: ""
  }

  constructor(private cookieService: CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.cookieService.get('token_access');
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError((error) => {
        return throwError(() => this.handelError(error));
      })
    );
  }
  
  handelError(error: HttpErrorResponse) {
    if(error.status === 0) {
      this.errorOut.intCodigo = error.status;
      this.errorOut.strDescripcion = error.error + " - Error Desconocido";
      this.errorOut.strAdicional = error.message;
    } else {
      this.errorOut.intCodigo = error.status;
      this.errorOut.strDescripcion = error.error;
      this.errorOut.strAdicional = error.message;
    }

    return this.errorOut;
  }
}
