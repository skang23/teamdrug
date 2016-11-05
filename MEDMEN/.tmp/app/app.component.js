var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';
import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { SavedSearchPage } from '../pages/saved-search/saved-search';
import { LoginPage } from '../pages/login/login';
export var MyApp = (function () {
    function MyApp(platform, menu) {
        var _this = this;
        this.menu = menu;
        this.rootPage = TabsPage;
        this.pages = [
            { title: 'Profile', component: ProfilePage },
            { title: 'Saved Search', component: SavedSearchPage }
        ];
        firebase.initializeApp({
            apiKey: "AIzaSyA9vqptDTepxrX7S09_cO_HzroGM9tc9AA",
            authDomain: "ionic-firebase-fe562.firebaseapp.com",
            databaseURL: "https://ionic-firebase-fe562.firebaseio.com",
            storageBucket: "",
            messagingSenderId: "1014682381401"
        });
        firebase.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = LoginPage;
            }
        });
        platform.ready().then(function () {
            StatusBar.styleDefault();
            Splashscreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.push(page.component);
    };
    __decorate([
        ViewChild('nav'), 
        __metadata('design:type', NavController)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Component({template:/*ion-inline-start:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <!--<ion-title>Menu</ion-title>-->\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav #nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [Platform, MenuController])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map