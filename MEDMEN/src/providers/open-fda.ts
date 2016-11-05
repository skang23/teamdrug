import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

/*
  Generated class for the OpenFDA provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class OpenFDA {
	serviceURL: string;
	drugLabelURL: string = '/drug/label.json?';
	api_key: string = 'api_key=Ckqa3XIOY9x4ZSLm2HPnm3aHPI8K3BznRXkQpWVx';

  constructor(public http: Http) {
  	this.http = http;
    this.serviceURL = 'https://api.fda.gov';
  }

  fetchData(rxcui: string) {
  	return this.http.get(this.serviceURL + this.drugLabelURL + this.api_key + '&search=rxcui:' + encodeURI(rxcui))
  		.map(res=>res.json());
 
  }


  /*handleError(error) {
  	console.error(error);
  	return Observable.throw(error.json().error||'Server error');
  }*/

}


/*
query:
 https://api.fda.gov/drug/label.json?api_key=Ckqa3XIOY9x4ZSLm2HPnm3aHPI8K3BznRXkQpWVx&search=rxcui:1299203
*/