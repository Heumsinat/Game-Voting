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

  private _filename:string = 'hello.mp3';
  private _toggleMute:string = 'stop';
  private article_id: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ivrPlayer: IvrplayerProvider) {
    this.article_id = this.navParams.get('article_id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.ivrPlayer.register(this._filename).catch( onError => console.log(onError) ).then( (onSuccess)=> {
      console.log('Registered a playback insance', onSuccess);
      return this.ivrPlayer.play(this._filename);
    }).then( (onPlaybackSuccess) => {
      console.log('ivrPlayer is playing', onPlaybackSuccess);
    });
  }

  ionViewWillLeave() {
    this.ivrPlayer.destroy();
  }

  public muteAudio() {
    switch(this._toggleMute) {
      case 'stop':
        this._toggleMute = 'play';
        this.ivrPlayer.stop();
        break;
      default:
        this._toggleMute = 'stop';
        this.ivrPlayer.play(this._filename);
    }
  }

}
