import { Observable } from 'rxjs/Rx';
import { Response, Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class BaseService {

  constructor(public http: Http) { }

  public extractData(res: Response) {
    return res.json();
  }
  public handleError(error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(error.json());
  }

}
