import { BaseService } from './../shared/service/base.service';
import { contentHeaders } from './../shared/common/headers';
import { URL_AUTH } from './../shared/common/url_const';
import { Usuario } from './../shared/modelo/usuario';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

// URL BACK END

@Injectable()
export class LoginService extends BaseService {
  private _url = URL_AUTH;

  public login(usuario: Usuario): Observable<any> {
    let body = JSON.stringify(usuario);
    return this.http.post(this._url, body, { headers: contentHeaders })
      // ...and calling .json() on the response to return data
      .map(this.extractData)
      //...errors if any
      .catch(this.handleError);
  }

}
