import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ActionSheetController} from 'ionic-angular';

/**
 * Generated class for the AssistancePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-assistance',
  templateUrl: 'assistance.html',
})
export class AssistancePage {
  @ViewChild('self') self1;
  @ViewChild('help') help1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platformFour: Platform, public actionsheetCtrlFour: ActionSheetController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AssistancePage');
  }

  record4(){
    console.log(this.self1.value);
    console.log(this.help1.value);
  }

  openMenuFour() {
    let actionSheetFour = this.actionsheetCtrlFour.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page',
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
          icon: !this.platformFour.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetFour.present();
  }

}
