import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import {AddmedPage} from '../pages/addmed/addmed';
import {AssistancePage} from '../pages/assistance/assistance';
import {CarePage} from '../pages/care/care';
import { ConsentPage } from '../pages/consent/consent';
import { ContactPage } from '../pages/contact/contact';
import { DetailPage } from '../pages/detail/detail';
import {DocumentsPage} from '../pages/documents/documents';
import { FirstPage } from '../pages/first/first';
import { HomePage } from '../pages/home/home';
import {MedicalPage} from '../pages/medical/medical';
import {MedicationsPage} from '../pages/medications/medications';
import { TabsPage } from '../pages/tabs/tabs';
import { TrachPage } from '../pages/trach/trach';
import { WhiteboardPage } from '../pages/whiteboard/whiteboard';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CanvasDraw } from '../components/canvas-draw/canvas-draw';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    ConsentPage,
    MedicationsPage,
    AddmedPage,
    FirstPage,
    TrachPage,
    WhiteboardPage,
    CanvasDraw,
    CarePage,
    AssistancePage,
    DocumentsPage,
    MedicalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    DetailPage,
    ConsentPage,
    MedicationsPage,
    AddmedPage,
    FirstPage,
    TrachPage,
    WhiteboardPage,
    CanvasDraw,
    CarePage,
    AssistancePage,
    DocumentsPage,
    MedicalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
