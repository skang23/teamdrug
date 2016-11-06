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
	public openDetail = 0;
  public drugsList: Array<{name: string, rxcuid: string, drugInfo: Array<{type: string, details: string, showDetails: boolean}>, 
  	icon: string, showDetails: boolean}> = [];
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

        var drugGroup = drugJson.rxnormdata.drugGroup;
        var conceptGroups = drugGroup.conceptGroup;
        //console.log(conceptGroups);
        conceptProperty = this.rxnorm.getConceptProperties(conceptGroups);
        //console.log("Drugs List: %o", conceptProperty);
        for (var d in conceptProperty){ 
        	var dName = conceptProperty[d].name['#text'];
        	var dRxcuid = conceptProperty[d].rxcui['#text'];
        	this.drugsList.push({
        		name: dName,
        		rxcuid: dRxcuid,
        		drugInfo: [],
        		icon: 'ios-add-circle-outline',
        		showDetails: false
			    });
        }
        this.showList = true
       },
       error => {
        console.error("Error Finding Drugs!");
        return Observable.throw(error);
       }
    );
  }

  getDrugInfo(drug) {
  	if (drug.drugInfo.length == 0){
  		this.openFDA.fetchData(drug.rxcuid).subscribe(
			data=>{
				console.log("getdruginfo");
		  	if (!data.hasOwnProperty('results')) {
		  		console.log("data doesn't exist");
		  	}
		  	else {
		  		let result = data.results[0];

					// dosage & admin details
					if (result.hasOwnProperty('dosage_and_administration')) {
						drug.drugInfo.push({
							type: 'Dosage and Administration',
							details: result.dosage_and_administration[0],
							showDetails: false
						});
					}
					// warnings details (show boxed_warning or warnings_and_cautions or warnings)
					if (result.hasOwnProperty('boxed_warning')) {
						drug.drugInfo.push({
							type: 'Warnings',
							details: result.boxed_warning[0],
							showDetails: false
						});
					}
					else {
						//let wac = data.results[0].warnings_and_cautions[0];
						if (result.hasOwnProperty('warnings_and_cautions')) {
							drug.drugInfo.push({
							type: 'Warnings',
							details: result.warnings_and_cautions[0],
							showDetails: false
							});
						}
						else {
							//let w = data.results[0].warnings[0];
							if (result.hasOwnProperty('warnings')) {
								drug.drugInfo.push({
								type: 'Warnings',
								details: result.warnings[0],
								showDetails: false
								});
							}
						}
					}
					// pregnancy details
					if (result.hasOwnProperty('pregnancy')) {
						drug.drugInfo.push({
							type: 'Pregnancy',
							details: result.pregnancy[0],
							showDetails: false
						});
					}
					// stop use details
					if (result.hasOwnProperty('stop_use')) {
						drug.drugInfo.push({
							type: 'Stop Use',
							details: result.stop_use[0],
							showDetails: false
						});
					}
					// do not use details
					if (result.hasOwnProperty('do_not_use')) {
						drug.drugInfo.push({
							type: 'Do Not Use',
							details: result.do_not_use[0],
							showDetails: false
						});
					}
		  	}
		  },
		  err => {
			  console.log("error");
		  //	Observable.throw(err);
		 	});
  	}
  	else {
  		console.log(drug.drugInfo);
  	}
	}

  toggleDrugInfo(item) {
	  console.log("toggle drug info");
  	if (item.showDetails) {
  			item.showDetails = false;
	  		item.icon = 'ios-add-circle-outline';
  	}
  	else {
  		item.showDetails = true;
  		item.icon = 'ios-remove-circle-outline';
  		this.getDrugInfo(item);
  	}
  }

  toggleDetails(item) {
	  console.log(item.showDetails);
	  console.log("toggle details");
  	var flag = item.showDetails;
  	if (flag) {
		  
  		item.showDetails = false;
  	}
  	else {
  		item.showDetails = true;
  	}
  }

  onInput(event) {
  	let val = event.target.value;
		this.drugsList = [];
  	if (val && val.trim() != '') {
      this.whichDrug = val.trim();
      this.getDrugs(this.whichDrug);
    }
  }

  /*onCancel(event) {
  	this.showList = false;
  }*/

  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }

}
