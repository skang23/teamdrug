var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { ProfilePage } from '../pages/profile/profile';
import { SavedSearchPage } from '../pages/saved-search/saved-search';
import { InteractionsPage } from '../pages/interactions/interactions';
import { DescriptionPage } from '../pages/description/description';
import { NearByStorePage } from '../pages/near-by-store/near-by-store';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import { SignupPage } from '../pages/signup/signup';
import { AuthData } from '../providers/auth-data';
import { GoogleMap } from '../providers/google-map';
import { OpenFDA } from '../providers/open-fda';
import { ProfileData } from '../providers/profile-data';
import { Rxnorm } from '../providers/rxnorm';
export var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                MyApp,
                ProfilePage,
                SavedSearchPage,
                InteractionsPage,
                DescriptionPage,
                NearByStorePage,
                TabsPage,
                LoginPage,
                ResetPasswordPage,
                SignupPage
            ],
            imports: [
                IonicModule.forRoot(MyApp)
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                MyApp,
                ProfilePage,
                SavedSearchPage,
                InteractionsPage,
                DescriptionPage,
                NearByStorePage,
                TabsPage,
                LoginPage,
                ResetPasswordPage,
                SignupPage
            ],
            providers: [
                AuthData,
                GoogleMap,
                OpenFDA,
                ProfileData,
                Rxnorm
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map