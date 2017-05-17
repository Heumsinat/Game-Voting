import { Component } from '@angular/core';
import { AlertController, Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the Menu3Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-text',
  templateUrl: 'text.html',
})
export class TextPage {

  constructor( public navCtrl: NavController, 
               public navParams: NavParams, 
               private alertCtrl: AlertController, 
               private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextPage');
  }

  popToRoot(){
    this.navCtrl.push(HomePage);
  }
   
  replay(){
    this.navCtrl.push(TextPage);
  }
  
  exit() {
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
