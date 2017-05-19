import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { IvrplayerProvider } from '../../providers/ivrplayer/ivrplayer';

/**
 * Generated class for the DetailPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  private article_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ivrPlayer: IvrplayerProvider) {
    this.article_id = this.navParams.get('article_id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.ivrPlayer.play('hello.mp3');
  }

  stopAudio(){
    this.ivrPlayer.stop('hello.mp3');
  }



  ionViewWillLeave() {
    this.ivrPlayer.destroy();
  }

}
