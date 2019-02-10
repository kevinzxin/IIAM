import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { TabsPage } from '../pages/tabs/tabs';
import { ConsentPage } from '../pages/consent/consent';
import { FirstPage } from'../pages/first/first';
import { TrachPage } from '../pages/trach/trach';
import { WhiteboardPage } from '../pages/whiteboard/whiteboard';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  loader:any;

  constructor(public platform: Platform, public loadingCtrl: LoadingController, public storage: Storage) {
      this.presentLoading();
      this.platform.ready().then(() => {
        this.storage.get('introShown').then((result) => {
          if(result){
            this.rootPage = FirstPage;
          } else {
            this.rootPage = FirstPage;
            this.storage.set('introShown', true);
          }

          this.loader.dismiss();

        });

      });

    }

    presentLoading() {

      this.loader = this.loadingCtrl.create({
        content: "Authenticating..."
      });

      this.loader.present();

    }
}
  //constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    //platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
    //});
