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
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';
import { TabsPage } from '../tabs/tabs';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var SignupPage = (function () {
    function SignupPage(navCtrl, authData, formBuilder, loadingCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.signupForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
    }
    SignupPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('Hello SignupPage Page');
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password).then(function () {
                _this.navCtrl.setRoot(TabsPage);
            }, function (error) {
                _this.loading.dismiss();
                var alert = _this.alertCtrl.create({
                    message: error.message,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                alert.present();
            });
            this.loading = this.loadingCtrl.create({
                dismissOnPageChange: true,
            });
            this.loading.present();
        }
    };
    SignupPage = __decorate([
        Component({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/signup/signup.html"*/'<!--\n  Generated template for the Signup page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Create an Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<img src="http://placehold.it/300x100">\n	<form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n		<ion-item>\n			<ion-label stacked>Email</ion-label>\n			<ion-input #email formControlName="email" type="email" (change)="elementChanged(email)"\n			placeholder="Your email address" [class.invalid]="!signupForm.controls.email.valid && (emailChanged||submitAttempt)"></ion-input>\n		</ion-item>\n		<ion-item class="error-message" *ngIf="!signupForm.controls.email.valid && (emailChanged||submitAttempt)">\n			<p>Please enter a valid email.</p>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Password</ion-label>\n			<ion-input #password formControlName="password" type="password" (change)="elementChanged(password)" placeholder="Your password"\n			[class.invalid]="!signupForm.controls.password.valid && (passwordChanged||submitAttempt)"></ion-input>\n		</ion-item>\n		<ion-item class="error-message" *ngIf="!signupForm.controls.password.valid && (passwordChanged||submitAttempt)">\n			<p>Your password needs more than 6 characters.</p>\n		</ion-item>\n		<button ion-button block type="submit">Create an Account</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/signup/signup.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AuthData, FormBuilder, LoadingController, AlertController])
    ], SignupPage);
    return SignupPage;
}());
//# sourceMappingURL=signup.js.map