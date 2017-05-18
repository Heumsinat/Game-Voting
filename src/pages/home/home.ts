import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private DetailRoute = DetailPage;

  constructor(public navCtrl: NavController) {

  }

  public viewDetail(id: number): any {
    this.navCtrl.push(DetailPage, {
      article_id: id
    })
  }

}
