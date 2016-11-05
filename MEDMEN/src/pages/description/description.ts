import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { OpenFDA } from '../../providers/open-fda';
import { AuthData } from '../../providers/auth-data';
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
	drugInfo;
	whichDrug: string;
  constructor(public navCtrl: NavController, public authData: AuthData, public openFDA: OpenFDA) {}

  ionViewDidLoad() {
  	this.getDrugInfo();
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
  	if (val && val.trim() != '') {
      this.whichDrug = val.trim();
    }
  }

  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }

}
