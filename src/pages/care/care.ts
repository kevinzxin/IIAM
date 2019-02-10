import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CarePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-care',
  templateUrl: 'care.html',
})
export class CarePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformThree: Platform, public actionsheetCtrlThree: ActionSheetController) {
  }

  openMenuThree() {
    let actionSheetThree = this.actionsheetCtrlThree.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-three',
      buttons: [
        {
          text: 'Add note',
          handler: () => {
            console.log('Add note clicked');
          }
        },
        {
          text: 'Add PDF',
          handler: () => {
            console.log('Add PDF clicked');
          }
        },
        {
          text: 'Add Picture',
          handler: () => {
            console.log('Add picture clicked');
          }
        },
        {
          text: 'Add Video',
          handler: () => {
            console.log('Add video clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platformThree.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetThree.present();
  }
}