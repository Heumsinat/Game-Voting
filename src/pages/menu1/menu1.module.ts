import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Menu1Page } from './menu1';

@NgModule({
  declarations: [
    Menu1Page,
  ],
  imports: [
    IonicPageModule.forChild(Menu1Page),
  ],
  exports: [
    Menu1Page
  ]
})
export class Menu1PageModule {}
