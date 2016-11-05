import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the SavedSearch page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-saved-search',
  templateUrl: 'saved-search.html'
})
export class SavedSearchPage {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello SavedSearchPage Page');
  }

}
