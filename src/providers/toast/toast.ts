import { Injectable } from '@angular/core';
import { ToastController } from "ionic-angular";

/*
  Generated class for the ToastProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ToastProvider {

  constructor(public toast: ToastController) {
    console.log('Hello ToastProvider Provider');
  }

  kDuration = 1500;
  show(content: string) {
    const toast = this.toast.create({
      message: content,
      duration: this.kDuration,
      dismissOnPageChange: true,
      position: 'middle'
    });
    toast.present();
  };

}
