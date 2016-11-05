import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Rx';

import { AuthData } from '../../providers/auth-data';
import { OpenFDA } from '../../providers/open-fda';
import { Rxnorm } from '../../providers/rxnorm';
import { LoginPage } from '../login/login';


/*
  Generated class for the Description page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-description',
  templateUrl: 'description.html'
})
export class DescriptionPage {
	public drugSearch = '';
	public showList: boolean;
	public drugsName = [];
  public drugsCuid = [];
	public drugInfo;
	public whichDrug: string;

  constructor(public navCtrl: NavController, public authData: AuthData, public openFDA: OpenFDA, public rxnorm: Rxnorm) {}

  ionViewDidLoad() {
  	//this.getDrugInfo();
  }

  getDrugs(drug: string) {
    var parser = new DOMParser();
    var drugResponse = this.rxnorm.getDrugsResponse(drug);
    var drugJson:any;
    var conceptProperty: any;

    drugResponse.subscribe(
      data => {
        drugJson=this.rxnorm.xmlToJson(parser.parseFromString(data, "text/xml"));
        this.drugsName = [];
        console.log(JSON.stringify(drugJson));

        var drugGroup = drugJson.rxnormdata.drugGroup;
        var conceptGroups = drugGroup.conceptGroup;
        console.log(conceptGroups);
        conceptProperty = this.rxnorm.getConceptProperties(conceptGroups);
        console.log("Drugs List: %o", conceptProperty);
        for (var d in conceptProperty){ 
        	var name = conceptProperty[d].name['#text'];
        	var rxcuid = conceptProperty[d].rxcui['#text'];
        	this.drugsName.push(name);
        	this.drugsCuid.push(rxcuid);
          console.log(name);
        }
        this.showList = true
        console.log(this.drugsName);
       },
       error => {
        console.error("Error Finding Drugs!");
        return Observable.throw(error);
       }
    );
  }

  getDrugInfo() {
  	this.openFDA.fetchData('1299203').subscribe(
			data=>{
				this.drugInfo = data.results[0].boxed_warning[0];
			},
			err=>{
				console.log(err);
			}
		);
  }

  onInput(event) {
  	let val = event.target.value;
  	if (!val) {
  		this.drugsName = [];
  		this.drugsCuid = [];
  	}
  	if (val && val.trim() != '') {
      this.whichDrug = val.trim();
      this.getDrugs(this.whichDrug);
    }
  }

  // onCancel(event) {
  // 	this.showList = false;
  // 	event.target.value = '';
  // 	this.drugsName = [];
  // }

  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }

}
