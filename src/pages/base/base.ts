import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingProvider } from "../../providers/loading/loading";
import { AlertProvider } from "../../providers/alert/alert";
import { ToastProvider } from "../../providers/toast/toast";
/**
 * Generated class for the BasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-base',
  templateUrl: 'base.html',
})
export class BasePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,  
              public loading: LoadingProvider,
              public alert: AlertProvider, 
              public toast: ToastProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BasePage');
  }

}
