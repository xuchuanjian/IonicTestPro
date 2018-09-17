import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StorageProvider {

  constructor(public storage: Storage) {
  }

  JGLog(out: any) {
    console.log(out);
  };
  set(value: any, key: string) {
    if(!key || key.length == 0 || !value) {
      //不存在
      return;
    }
    return this.storage.set(key, value);
  }

  get(key: string) {
    if(!key || key.length == 0) {
      this.JGLog('key不能为空');
      return;
    }
    return this.storage.get(key);
  }


}
