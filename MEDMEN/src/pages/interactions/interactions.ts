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
  public openList = [];

  public drugsCuid = {};
  public addedDrugs = [];
  public addedCuid = {};
  public showList: boolean;
  public showInteractions = false;
  public interactionString = [];
  public severityString = [];
  public interactionExist = "";
  constructor(public navCtrl: NavController, public authData: AuthData, public rxnorm: Rxnorm) {}
  
  ionViewDidLoad() {
    console.log('Hello InteractionsPage Page');
  }
  deleteItem(event, drug){
    var i = this.addedDrugs.indexOf(drug);
    this.addedDrugs.splice(i, 1);
    delete this.addedCuid[drug];
  }
  findClicked(){

    this.showInteractions = true;
    this.getInteractions();
    
   
  }
  logOut() {
  	this.authData.logoutUser().then(()=>{
  		this.navCtrl.setRoot(LoginPage);
  	});
  }
  onInput(ev : any) {
    let val = ev.target.value;
  //  console.log(val);
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
        this.drugsCuid = {};

          var drugGroup = drugJson.rxnormdata.drugGroup;
          var conceptGroups = drugGroup.conceptGroup;
          conceptProperty = this.rxnorm.getConceptProperties(conceptGroups);
          for (var d in conceptProperty){ 
           var name = conceptProperty[d].name['#text'];
           var rxcuid = conceptProperty[d].rxcui['#text'];
           this.drugsName.push(name);
           this.drugsCuid[name]=rxcuid;
          //  this.drugsName[name] = rxcuid;
          }
          this.showList = true
         },
         error => {
           console.error("Error Finding Drugs!");
           return Observable.throw(error);
         }
    );
      

    
  }

    getInteractions() {
      var cuidList = [];
      for (var key in this.addedCuid){
        cuidList.push(this.addedCuid[key]);
      }
    //var parser = new DOMParser();
    var interactionResponse = this.rxnorm.getInteractionsResponse(cuidList);
     // var drugJson:any;
    interactionResponse.subscribe(
      data => {
       //   console.log(data);
          if(data.fullInteractionTypeGroup === undefined) {
            this.interactionExist = "No Interaction Found";
            this.interactionString = [];
            return;
          }
          this.interactionExist = "Interaction Found!";

          var interactionType = data.fullInteractionTypeGroup[0].fullInteractionType;
          this.interactionString = [];
          for(var i in interactionType) {
          //  this.interactionString +="<>Comment:"+interactionType[i].comment+"</p>";
            var interactionPair = interactionType[i].interactionPair;
            for(var p in interactionPair){
              
            var description = interactionPair[p].description;
            this.interactionString.push(description);
            var severity = interactionPair[p].severity;
            this.severityString.push(severity);
            }
            
          }
//          console.log(interactionType);

         },
         error => {
           console.error("Error Finding Drugs!");
           return Observable.throw(error);
         }
    );
      

    
  }

  itemTapped(event, item){
    if (this.addedDrugs.find(x=>x==item) != undefined) {
      alert("Already Added");
    }
    else{
    this.addedDrugs.push(item);
    this.addedCuid[item] = this.drugsCuid[item];
  //  console.log(item);
  //  console.log(this.drugSearch);
    this.drugSearch = "";
    this.drugsName = [];
    this.drugsCuid = {};
    }
  }

}
