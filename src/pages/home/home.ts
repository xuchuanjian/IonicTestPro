import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { HttpServerProvider } from "../../providers/http-server/http-server";
import { LoadingProvider } from "../../providers/loading/loading";
import { AlertProvider } from "../../providers/alert/alert";
import { ToastProvider } from "../../providers/toast/toast";
import { BasePage } from "../../pages/base/base";
import { ExamplePage } from "../../pages/example/example";
import { StorageProvider } from "../../providers/storage/storage";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BasePage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public loading: LoadingProvider,
    public alert: AlertProvider,
    public toast: ToastProvider,
    public http: HttpServerProvider,
    public storage: StorageProvider) {
    super(navCtrl, navParams, loading, alert, toast);
  }

  static url: string = 'https://jsonplaceholder.typicode.com/users';

  userName: string = '';
  // todoList:[];
  users;
  didClick() {

    this.navCtrl.push(ExamplePage, {
      'title': 'adsffffffffff'
    });

    const key = '11';
    this.storage.set('adfadsfffd21111', key).then(res => {
      console.log('======' + res);

    }).catch(error => {
      console.log(error);
    });
    this.storage.get(key).then(res => {
      console.log(res);
    });
  }

  items = ['sfds', 'sdfsd', 'fuckyou', 'test'];

  presentActionSheet() {

  }

}
