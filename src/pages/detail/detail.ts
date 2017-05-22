import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Platform } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public ivrPlayer: IvrplayerProvider,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {
    this.article_id = this.navParams.get('article_id');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.ivrPlayer.register(this._filename).catch( onError => console.log(onError) ).then( (onSuccess)=> {
      console.log('Registered a playback insance', onSuccess);
      return this.ivrPlayer.play();
    }).then( (onPlaybackSuccess) => {
      console.log('ivrPlayer is playing', onPlaybackSuccess);
    });
  }

  // stopAudio(){
  //   this.ivrPlayer.stop('hello.mp3');
  // }



  ionViewWillLeave() {
    this.ivrPlayer.destroy();
  }

  private routeHome() {
    this.navCtrl.popToRoot();
  }

  private muteAudio() {
    this.ivrPlayer.togglePlay();
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
