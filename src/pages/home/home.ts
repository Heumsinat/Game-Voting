import { Component } from '@angular/core';
import { AlertController, Platform, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private page_id: number = 1;
  private DetailRoute = DetailPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController, private alertCtrl: AlertController, private platform: Platform) {
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

  private exitButtonClick() {
    let alert = this.alertCtrl.create({
      title: 'ចាកចេញ',
      message: 'តើ​អ្នក​ពិត​ជា​ចង់​ចាក​ចេញ​ពី​កម្មវិធី​នេះ?​',
      buttons: [
        {
          text: "ទេ",
          role: 'cancel'
        },
        {
          text: "បាទ​ / ចាស",
          handler: () => {
            this.platform.exitApp();
          }
        },
      ]
    });
    alert.present();
  }

}
