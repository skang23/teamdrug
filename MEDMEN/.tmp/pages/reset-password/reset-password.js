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
/*
  Generated class for the ResetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
export var ResetPasswordPage = (function () {
    function ResetPasswordPage(authData, formBuilder, navCtrl, loadingCtrl, alertCtrl) {
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.emailChanged = false;
        this.passwordChanged = false;
        this.submitAttempt = false;
        this.resetPasswordForm = formBuilder.group({
            email: ['', Validators.compose([Validators.required])],
        });
    }
    ResetPasswordPage.prototype.elementChanged = function (input) {
        var field = input.inputControl.name;
        this[field + "Changed"] = true;
    };
    ResetPasswordPage.prototype.ionViewDidLoad = function () {
        console.log('Hello ResetPasswordPage Page');
    };
    ResetPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.submitAttempt = true;
        if (!this.resetPasswordForm.valid) {
            console.log(this.resetPasswordForm.value);
        }
        else {
            this.authData.resetPassword(this.resetPasswordForm.value.email).then(function (user) {
                var alert = _this.alertCtrl.create({
                    message: "We just sent you a reset link to your email",
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel',
                            handler: function () {
                                _this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert.present();
            }, function (error) {
                var errorMessage = error.message;
                var errorAlert = _this.alertCtrl.create({
                    message: errorMessage,
                    buttons: [
                        {
                            text: "Ok",
                            role: 'cancel'
                        }
                    ]
                });
                errorAlert.present();
            });
        }
    };
    ResetPasswordPage = __decorate([
        Component({
            selector: 'page-reset-password',template:/*ion-inline-start:"/Users/suyeonkang/ionic/teamdrug/MEDMEN/src/pages/reset-password/reset-password.html"*/'<!--\n  Generated template for the ResetPassword page.\n\n  See http://ionicframework.com/docs/v2/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Reset your Password</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<img src="http://placehold.it/300x100">\n	<form [formGroup]="resetPasswordForm" (submit)="resetPassword()" novalidate>\n		<ion-item>\n			<ion-label stacked>Email</ion-label>\n			<ion-input #email formControlName="email" type="email" (change)="elementChanged(email)" placeholder="Your email address"\n			[class.invalid]="!resetPasswordForm.controls.email.valid && (emailChanged||submitAttempt)"></ion-input>\n		</ion-item>\n		<ion-item class="error-message" *ngIf="!resetPasswordForm.controls.email.valid && (emailChanged||submitAttempt)">\n			<p>Please enter a valid email.</p>\n		</ion-item>\n		<button ion-button block type="submit">Reset your Password</button>\n	</form>\n</ion-content>\n'/*ion-inline-end:"/Users/suyeonkang/ionic/teamdrug/MEDMEN/src/pages/reset-password/reset-password.html"*/
        }), 
        __metadata('design:paramtypes', [AuthData, FormBuilder, NavController, LoadingController, AlertController])
    ], ResetPasswordPage);
    return ResetPasswordPage;
}());
//# sourceMappingURL=reset-password.js.map