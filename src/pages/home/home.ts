import { Component } from '@angular/core';
import { AlertController, NavController, Platform, NavParams, LoadingController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';
import { IvrplayerProvider } from '../../providers/ivrplayer/ivrplayer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private page_id: number = 1;
  private DetailRoute = DetailPage;
  private _filename:string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController,
    private platform: Platform,
    public ivrPlayer: IvrplayerProvider
  ) {
    if(typeof this.navParams.get('page_id') != 'undefined') {
      this.page_id = this.navParams.get('page_id');
      this. _filename = this.navParams.get('page_id')+'.mp3';
    }else {
      this. _filename = 'Title.mp3';
    }
  }

  ionViewDidLoad() {
    let timeout = setTimeout(() => {
      console.log('ionViewDidLoad DetailPage');
      this.ivrPlayer.register(this._filename).catch( onError => console.log(onError) ).then( (onSuccess)=> {
        console.log('Registered a playback insance', onSuccess);
        return this.ivrPlayer.play();
      }).then( (onPlaybackSuccess) => {
        console.log('ivrPlayer is playing', onPlaybackSuccess);
      });
    }, 300);
  }

  ionViewWillLeave() {
    this.ivrPlayer.destroy();
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
