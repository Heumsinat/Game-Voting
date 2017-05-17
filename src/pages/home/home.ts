import { Component } from '@angular/core';
import { AlertController, Platform, NavController, NavParams, LoadingController } from 'ionic-angular';
import {Menu1Page} from '../menu1/menu1';
import {Menu2Page} from '../menu2/menu2';
import {Menu3Page} from '../menu3/menu3';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor( public navCtrl: NavController, 
               private alertCtrl: AlertController, 
               private platform: Platform ) {

  }
  menu1(){
    this.navCtrl.push(Menu1Page);
  }
  menu2(){
    this.navCtrl.push(Menu2Page);
  }
  menu3(){
    this.navCtrl.push(Menu3Page);
  }

  exitButtonClick() {
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
