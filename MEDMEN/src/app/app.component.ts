import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import firebase from 'firebase';

import { TabsPage } from '../pages/tabs/tabs';
import { ProfilePage } from '../pages/profile/profile';
import { LoginPage } from '../pages/login/login';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: NavController;
  rootPage:any = TabsPage;
  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, private menu: MenuController) {
    this.pages = [
        { title: 'Profile', component: ProfilePage },
    ];
    firebase.initializeApp({
        apiKey: "AIzaSyA9vqptDTepxrX7S09_cO_HzroGM9tc9AA",
        authDomain: "ionic-firebase-fe562.firebaseapp.com",
        databaseURL: "https://ionic-firebase-fe562.firebaseio.com",
        storageBucket: "",
        messagingSenderId: "1014682381401"
    });

    firebase.auth().onAuthStateChanged((user)=>{
      if (!user) {
        this.rootPage = LoginPage;
      }
      else{
        this.rootPage = TabsPage;
      }
    });
    platform.ready().then(() => {
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    this.nav.push(page.component);
  }
}
