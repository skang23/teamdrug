import { Component } from '@angular/core';

import { InteractionsPage } from '../interactions/interactions';
import { DescriptionPage } from '../description/description';
import { NearByStorePage } from '../near-by-store/near-by-store';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = InteractionsPage;
  tab2Root: any = DescriptionPage;
  tab3Root: any = NearByStorePage;

  constructor() {

  }
}
