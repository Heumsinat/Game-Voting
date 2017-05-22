import { Component } from '@angular/core';
import { AlertController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

import { ActionProvider } from '../../providers/action/action';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private page_id: number = 1;
  private DetailRoute = DetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private actionProvider: ActionProvider) {
    if(typeof this.navParams.get('page_id') != 'undefined') {
      this.page_id = this.navParams.get('page_id');
    }
  }

  public viewPage(id: number): any {
    this.navCtrl.push(HomePage, {
      page_id: id
    })
  }

  public viewDetail(id: number): any {
    this.navCtrl.push(DetailPage, {
      article_id: id
    })
  }

  private routeHome() {
    this.navCtrl.popToRoot();
  }

  private exitButtonClick() {
    this.actionProvider.exitApp();
  }

}
