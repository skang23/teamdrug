import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthData } from '../../providers/auth-data';

/*
  Generated class for the ResetPassword page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html'
})
export class ResetPasswordPage {
	public resetPasswordForm;
	emailChanged: boolean = false;
	passwordChanged: boolean = false;
	submitAttempt: boolean = false;

  constructor(public authData: AuthData, public formBuilder: FormBuilder, public navCtrl: NavController,
  	public loadingCtrl: LoadingController, public alertCtrl: AlertController) {
  	this.resetPasswordForm = formBuilder.group({
  		email: ['', Validators.compose([Validators.required])],
  	});
  }

  elementChanged(input) {
  	let field = input.inputControl.name;
  	this[field + "Changed"] = true;
  }

  ionViewDidLoad() {
    console.log('Hello ResetPasswordPage Page');
  }

  resetPassword() {
  	this.submitAttempt = true;
  	if (!this.resetPasswordForm.valid) {
  		console.log(this.resetPasswordForm.value);
  	}
  	else {
  		this.authData.resetPassword(this.resetPasswordForm.value.email).then((user)=>{
  			let alert = this.alertCtrl.create({
  				message: "We just sent you a reset link to your email",
  				buttons: [
  					{
  						text: "Ok",
  						role: 'cancel',
  						handler: () => {
  							this.navCtrl.pop();
  						}
  					}
  				]
  			});
  			alert.present();
  		}, (error)=>{
  			var errorMessage: string = error.message;
  			let errorAlert = this.alertCtrl.create({
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
  }
}
