import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the MedicalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-medical',
  templateUrl: 'medical.html',
})
export class MedicalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformSix: Platform, public actionsheetCtrlSix: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MedicalPage');
  }

  openMenuSix() {
    let actionSheetSix = this.actionsheetCtrlSix.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-six',
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
          icon: !this.platformSix.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetSix.present();
  }
}
