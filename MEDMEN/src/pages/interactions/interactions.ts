import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AuthData } from '../../providers/auth-data';
import { LoginPage } from '../login/login';
import { Rxnorm} from '../../providers/rxnorm';
import {Observable} from 'rxjs/Rx';

/*
  Generated class for the Interactions page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-interactions',
  templateUrl: 'interactions.html'
})
export class InteractionsPage {
  public drugSearch = '';
  public drugsName = [];
  public drugsCuid = [];

  public showList: boolean;
  constructor(public navCtrl: NavController, public authData: AuthData, public rxnorm: Rxnorm) {}
  
  ionViewDidLoad() {
    console.log('Hello InteractionsPage Page');
  }

  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }
  onInput(ev : any) {
    let val = ev.target.value;
    console.log(val);
    this.getDrugs(val);
    
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
          //  this.drugsName[name] = rxcuid;
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

}
