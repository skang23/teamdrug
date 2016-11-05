import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';

/*
  Generated class for the NearByStore page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-near-by-store',
  templateUrl: 'near-by-store.html'
})
export class NearByStorePage {

  constructor(public navCtrl: NavController, public authData: AuthData) {}

  ionViewDidLoad() {
    console.log('Hello NearByStorePage Page + abc');
    console.log('hello hello');
  }
  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }

}
