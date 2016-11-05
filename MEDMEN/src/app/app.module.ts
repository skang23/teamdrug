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

@NgModule({
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
})
export class AppModule {}
