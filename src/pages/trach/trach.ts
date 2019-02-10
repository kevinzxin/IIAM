import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController   } from 'ionic-angular';

/**
 * Generated class for the TrachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-trach',
  templateUrl: 'trach.html',
})
export class TrachPage {
  @ViewChild('date') date1; //date trach was placed
  @ViewChild('flap') flap1; //is a flap present?
  @ViewChild('size') size1; // what is the size
  @ViewChild('type') type1; //type of trach placed
  @ViewChild('protocol') protocol1; //protocol
  @ViewChild('supply') supply1; // cleaning supplies
  @ViewChild('eMgt') eMgt1; // emergency management
  @ViewChild('docContact') docContact1; // doctor contact info


  displayDate = '2018-01-01';
  bjork: string = "n";
  constructor(public navCtrl: NavController, public navParams: NavParams, public platformTwo: Platform, public actionsheetCtrlTwo: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrachPage');
  }

  recordTwo(){

  }

  openMenuTwo() {
    let actionSheetTwo = this.actionsheetCtrlTwo.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-two',
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
            console.log('Add Picture clicked');
          }
        },
        {
          text: 'Add Video',
          handler: () => {
            console.log('Add Video clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platformTwo.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetTwo.present();
  }

}
