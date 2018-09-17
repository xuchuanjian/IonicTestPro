import { Injectable } from '@angular/core';
import { AlertController, AlertButton } from "ionic-angular";

/*
  Generated class for the AlertProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlertProvider {

  constructor(public alertCtrl: AlertController ) {
  }
  show(content:string, buttons:Array<AlertButton>, title?: string, ) {
    const alertCtrl = this.alertCtrl.create({
      title: title,
      message: content,
      buttons:[...buttons]
    });
    alertCtrl.present();
  };

  showConfirm(content: string, handler?: (value: any) => boolean | void, title?: string) {
    this.show(content, [{
      text: '确定',
      handler: handler
    }], title );
  }
}
