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
import { ErrorRespModel, ResponseModel } from '@shared/models/generico/http.model';
import { Constantes } from '@utils/constantes';

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {
  errorOut: ResponseModel<any> = {
    isSuccess: false,
    message: "",
    messageCode: null,
    messageType: null,
    data: null,
  };

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
        console.log("EROR: ", error);
        return throwError(() => this.handelError(error));
      })
    );
  }
  
  handelError(e: HttpErrorResponse): ResponseModel<any> {
    if(e.status === 0) {
      this.errorOut.isSuccess = false;
      this.errorOut.message = Constantes.MSJ_ERROR_DESCONOCIDO;
      this.errorOut.data = null;
      this.errorOut.messageCode = -1;
      this.errorOut.messageType = null;
    } else {
      this.errorOut.isSuccess = e.error.IsSuccess || false;
      this.errorOut.message =  e.error.Message || Constantes.MSJ_ERROR_DESCONOCIDO;
      this.errorOut.data = null;
      this.errorOut.messageCode = e.error.MessageCode || -1;
      this.errorOut.messageType = e.error.MessageType || null;
    }

    return this.errorOut;
  }
}
