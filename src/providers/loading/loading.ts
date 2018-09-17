import { Injectable } from '@angular/core';
import { LoadingController, Loading } from "ionic-angular";
/*
  Generated class for the LoadingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LoadingProvider {
  
  constructor(private loadingCtrl: LoadingController) {
  }

  _loading: Loading;
  static kDefaultContent = '请稍候...';
  public show(content: string = LoadingProvider.kDefaultContent) {
    this._loading = this.loadingCtrl.create({
      content: content,
      duration: 9999999,
      dismissOnPageChange: true
    });
    this._loading.present();
  }

  public hide() {
    this._loading && this._loading.dismiss();
    this._loading = null;
  }
}
