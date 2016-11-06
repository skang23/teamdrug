import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the Rxnorm provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Rxnorm {
  drugs = {}
  baseUrl:string = "https://rxnav.nlm.nih.gov/REST/";
  conceptProperty:any



  constructor(public http: Http) {
    console.log('Hello Rxnorm Provider');
  }
  
 
  xmlToJson(xml) {
	
	// Create the return object
	var obj = {};

	if (xml.nodeType == 1) { // element
		// do attributes
		if (xml.attributes.length > 0) {
		obj["@attributes"] = {};
			for (var j = 0; j < xml.attributes.length; j++) {
				var attribute = xml.attributes.item(j);
				obj["@attributes"][attribute.nodeName] = attribute.nodeValue;
			}
		}
	} else if (xml.nodeType == 3) { // text
		obj = xml.nodeValue;
	}

	// do children
	if (xml.hasChildNodes()) {
		for(var i = 0; i < xml.childNodes.length; i++) {
			var item = xml.childNodes.item(i);
			var nodeName = item.nodeName;
			if (typeof(obj[nodeName]) == "undefined") {
				obj[nodeName] = this.xmlToJson(item);
			} else {
				if (typeof(obj[nodeName].push) == "undefined") {
					var old = obj[nodeName];
					obj[nodeName] = [];
					obj[nodeName].push(old);
				}
				obj[nodeName].push(this.xmlToJson(item));
			}
		}
	}
	return obj;
};
  getConceptProperties(data) {

    var arr = [];
    for (var i in data) {
      for (var j in data[i]) {
        if (j=='conceptProperties'){
          arr = arr.concat(data[i][j]);
       //   arr.push(data[i][j]);
        }
      }
  
    }
    return arr;
  }


  getInteractionsResponse(cuidList: Array<string>) {
    var headers = new Headers();
    headers.append('Accept', 'application/json');

    var resource = "interaction/list.json?rxcuis=";
    
    var cuidstring = cuidList.join('+');
    console.log(cuidstring);
    
    cuidstring = encodeURI(cuidstring);
    var url = this.baseUrl + resource + cuidstring;
    return this.http.get(url, {headers: headers}).map((res:Response)=>res.json());
  }

  getDrugs(drug: string) {
    var parser = new DOMParser();
    var drugResponse = this.getDrugsResponse(drug);
      var drugJson:any;
    var conceptProperty: any;
    drugResponse.subscribe(
      data => {
        drugJson=this.xmlToJson(parser.parseFromString(data, "text/xml"));
          console.log(JSON.stringify(drugJson));

          var drugGroup = drugJson.rxnormdata.drugGroup;
          var conceptGroups = drugGroup.conceptGroup;
          console.log(conceptGroups);
          conceptProperty = this.getConceptProperties(conceptGroups);
          for (var d in conceptProperty){ 
           var name = conceptProperty[d].name['#text'];
           var rxcuid = conceptProperty[d].rxcui['#text'];
            this.drugs[name] = rxcuid;
            console.log(name+ ", " + rxcuid);
          }
         },
         error => {
           console.error("Error Finding Drugs!");
           return Observable.throw(error);
         }
    );
      

    
  }
  getDrugsResponse(drug: string){
    var headers = new Headers();
    headers.append('Accept', 'application/xml');

    var resource = "drugs?name=";
    drug = encodeURI(drug);
    var url = this.baseUrl + resource + drug;
    return this.http.get(url, {headers: headers}).map((res:Response)=>res.text());

  }
}
