import { Injectable } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio';

/*
  Generated class for the IvrplayerProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class IvrplayerProvider {

  constructor(
    public nativeAudio: NativeAudio
  ) {
    console.log('Hello IvrplayerProvider Provider', this.nativeAudio);
  }

}
