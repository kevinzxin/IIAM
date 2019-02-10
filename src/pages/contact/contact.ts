import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController,  public navParams: NavParams, public platformEight: Platform, public actionsheetCtrlEight: ActionSheetController) {

  }

  openMenuEight() {
    let actionSheetEight = this.actionsheetCtrlEight.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-eight',
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
          icon: !this.platformEight.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetEight.present();
  }

}
