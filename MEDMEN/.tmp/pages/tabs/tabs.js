var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { InteractionsPage } from '../interactions/interactions';
import { DescriptionPage } from '../description/description';
import { NearByStorePage } from '../near-by-store/near-by-store';
export var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = InteractionsPage;
        this.tab2Root = DescriptionPage;
        this.tab3Root = NearByStorePage;
    }
    TabsPage = __decorate([
        Component({template:/*ion-inline-start:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Interactions" tabIcon="medkit"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Descriptions" tabIcon="clipboard"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="NearByStore" tabIcon="map"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map