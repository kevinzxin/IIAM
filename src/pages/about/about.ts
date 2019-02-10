import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, UrlSerializer, Platform, ActionSheetController  } from 'ionic-angular';
import { stringify } from '@angular/compiler/src/util';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

@ViewChild('oneLine') oneLine1; //stores what user types for "Please provide a brief one-liner"
@ViewChild('know') know1; //stores what user types for "Things I want you to know about me"
@ViewChild('edu') edu1; //education

  education: string = "n";
  constructor(public navCtrl: NavController, public navParams: NavParams, public platformOne: Platform, public actionsheetCtrlOne: ActionSheetController) {

  }

  recordOne(){
    console.log(this.know1.value);
    console.log(this.edu1.value + this.oneLine1.value);
  }

  openMenuOne() {
    let actionSheetOne = this.actionsheetCtrlOne.create({
      title: 'Options',
      cssClass: 'action-sheets-basic-page-one',
      buttons: [
        {
          text: 'Add note',
          role: 'destructive',
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
          role: 'cancel', 
          icon: !this.platformOne.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheetOne.present();
  }
}
