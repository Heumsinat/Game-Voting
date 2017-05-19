import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

/*
  Generated class for the IvrplayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IvrplayerProvider {
  private _toggleMute:string = 'stop';
  private _filepath:string = 'assets/mp3/';
  private _playbackInstance:string = '_session';
  private _is_playback_finished:boolean = true;

  constructor(
    public nativeAudio: NativeAudio
  ) {
    console.log('Hello IvrplayerProvider Provider', this.nativeAudio);
  }

  public register(filename: string): Promise<any> {
    console.log("We're playing the following filename => ", filename);
    return this.nativeAudio.preloadSimple(this._playbackInstance, this._filepath+filename);
  }

  public destroy(): Promise<any> {
    return this.nativeAudio.unload(this._playbackInstance);
  }

  public stop(): Promise<any> {
    this._toggleMute = 'play';
    return this.nativeAudio.stop(this._playbackInstance);
  }

  public play(): Promise<any> {
    this._toggleMute = 'stop';
    return this.nativeAudio.play(this._playbackInstance);
  }

  public togglePlay() {
    switch(this._toggleMute) {
      case 'stop':
        this._toggleMute = 'play';
        this.stop();
        break;
      default:
        this._toggleMute = 'stop';
        this.play();
    }
  }

}
