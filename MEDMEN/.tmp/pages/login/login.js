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
import { SignupPage } from '../signup/signup';
import { TabsPage } from '../tabs/tabs';
import { ResetPasswordPage } from '../reset-password/reset-password';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var LoginPage = (function () {
    function LoginPage(navCtrl, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.loginForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
    };
    LoginPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password).then(function (authData) {
                _this.navCtrl.setRoot(TabsPage);
            }, function (error) {
                _this.loading.dismiss().then(function () {
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
            });
        }
        this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
        });
        this.loading.present();
    };
    LoginPage.prototype.goToSignup = function () {
        this.navCtrl.push(SignupPage);
    };
    LoginPage.prototype.goToResetPassword = function () {
        this.navCtrl.push(ResetPasswordPage);
    };
    LoginPage = __decorate([
        Component({
            selector: 'page-login',template:/*ion-inline-start:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<img src="http://placehold.it/300x100">\n	<form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n		<ion-item>\n			<ion-label stacked>Email</ion-label>\n			<ion-input #email formControlName="email" type="email" (change)="elementChanged(email)" placeholder="Your email address" [class.invalid]="!loginForm.controls.email.valid && (emailChanged||submitAttempt)"></ion-input>\n		</ion-item>\n		<ion-item class="error-message" *ngIf="!loginForm.controls.email.valid && (emailChanged||submitAttempt)">\n			<p>Please enter a valid email.</p>\n		</ion-item>\n		<ion-item>\n			<ion-label stacked>Password</ion-label>\n			<ion-input #password formControlName="password" type="password" (change)="elementChanged(password)" placeholder="Your password" [class.invalid]="!loginForm.controls.password.valid && (passwordChanged||submitAttempt)"></ion-input>\n		</ion-item>\n		<ion-item class="error-message" *ngIf="!loginForm.controls.password.valid && (passwordChanged||submitAttempt)">\n			<p>Your password needs more than 6 characters.</p>\n		</ion-item>\n		<button ion-button block type="submit">Login</button>\n	</form>\n	<button ion-button block clear (click)="goToSignup()">Create a new account</button>\n	<button ion-button block clear (click)="goToResetPassword()">Forgot password</button>\n</ion-content>\n'/*ion-inline-end:"/Users/liayoo/Desktop/teamdrug/MEDMEN/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [NavController, AuthData, FormBuilder, AlertController, LoadingController])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map