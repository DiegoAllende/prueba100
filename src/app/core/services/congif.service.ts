import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';
import { GlobalService } from './global.service';


@Injectable({
  providedIn: 'root'
})
export class CongifService {

  constructor(
    private globalService: GlobalService,
    private http: HttpClient
  ) {
    console.log("********CONFIGURACION**********");
  }

  loadConfig() {
    return new Promise((resolve) => {
      combineLatest([this.getDataInit(), this.getKeyPublic()]).subscribe(resp => {
        resolve(true);
        this.globalService.setData(resp[0], resp[1]);
        // console.log("back: ", resp[2]);
      }, () => {
        alert("Verifique los archivos de configuracion")
      });
    });
  }

  getDataInit() {
    return this.http.get<any>('assets/configs/config.json');
  }

  getDataBack() {
    return this.http.get<any>('https://animechan.vercel.app/api/random');
  }

  getKeyPublic() {
    let header = new HttpHeaders({ "Content-Type": "text/plain; charset=utf-8" })
    return this.http.get('assets/configs/posvendor.pub.pem', {headers: header, responseType: "text"});
  }

}
