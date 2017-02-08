import { Injectable }              from '@angular/core';
import { Http, Response, Headers }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { Subdomain } from './Subdomain';
@Injectable()
export class SubDomainService {
  constructor (private http: Http) {}
  getSubdomains (): Observable<Subdomain[]> {
    return this.http.get('http://localhost:9091/subdomain')
                    .map(this.extractData)
                    .catch(this.handleError);
  }

   saveSubdomain (subdomain: Subdomain): Observable<Subdomain[]> {
       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this.http.put('http://localhost:9091/subdomain', JSON.stringify(subdomain), {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);
   }


  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}