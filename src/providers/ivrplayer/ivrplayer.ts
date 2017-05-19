import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

/*
  Generated class for the IvrplayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IvrplayerProvider {
  private _filepath:string = 'assets/mp3/';
  private _playbackInstance:string = '_session';
  private _is_playback_finished:boolean = true;

  constructor(
    public nativeAudio: NativeAudio
  ) {
    console.log('Hello IvrplayerProvider Provider', this.nativeAudio);
  }

  public destroy():any {
    this.nativeAudio.unload(this._playbackInstance);
  }

  public play(filename: string): any {
    console.log("We're playing the following filename => ", filename);
    this.nativeAudio.preloadSimple(this._playbackInstance, this._filepath+filename).catch(
      onError => console.log(onError)
    ).then( (onSuccess) => {
      this.nativeAudio.play(this._playbackInstance);
      console.log('Playback Success');
    });
  }

}
