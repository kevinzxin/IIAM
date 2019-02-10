import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { AddmedPage } from '../addmed/addmed';

/**
 * Generated class for the MedicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medications',
  templateUrl: 'medications.html',
})
export class MedicationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformSeven: Platform, public actionsheetCtrlSeven: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicationsPage');
  }

openMenuSeven() {
  let actionSheetSeven = this.actionsheetCtrlSeven.create({
    title: 'Options',
    cssClass: 'action-sheets-basic-page-seven',
    buttons: [
      {
        text: 'Add new medication',
        handler: () => {
          this.navCtrl.push(AddmedPage);
        }
      },
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
        icon: !this.platformSeven.is('ios') ? 'close' : null,
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  actionSheetSeven.present();
}



}
