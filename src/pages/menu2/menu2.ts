import { Component } from '@angular/core';
import { AlertController, Platform, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TextPage } from '../text/text';

/**
 * Generated class for the Menu2Page page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-menu2',
  templateUrl: 'menu2.html',
})
export class Menu2Page {

  constructor( public navCtrl: NavController, 
               public navParams: NavParams, 
               private alertCtrl: AlertController, 
               private platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Menu2Page');
  }
  Button1(){
    this.navCtrl.push(TextPage);
  }
  Button2(){
    this.navCtrl.push(TextPage);
  }
  Button3(){
    this.navCtrl.push(TextPage);
  }


  popToRoot(){
    this.navCtrl.push(HomePage);
  }
   
  replay(){
    this.navCtrl.push(Menu2Page);
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
