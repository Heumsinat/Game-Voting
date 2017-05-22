import { Injectable } from '@angular/core';
import { AlertController, Platform, NavController, NavParams } from 'ionic-angular';
import { IvrplayerProvider } from '../ivrplayer/ivrplayer';

/*
  Generated class for the ActionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ActionProvider {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private platform: Platform, private ivrPlayer: IvrplayerProvider) {
    console.log('Hello ActionProvider Provider');
  }

  public routeHome() {
    this.navCtrl.popToRoot();
  }

  public exitApp() {
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
