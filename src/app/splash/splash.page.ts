import { Component, OnInit, OnDestroy, AfterViewInit,QueryList, ViewChildren  } from '@angular/core';

import {NavController ,Platform, ModalController, ActionSheetController, PopoverController, IonRouterOutlet, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(  private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    public navCtrl: NavController, 
    private router: Router,
    private popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private toast: ToastController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,) { }

  async ngOnInit() {

    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
      
        this.navCtrl.navigateRoot('/tabss');
        //window["plugins"].PushbotsPlugin.setAlias(this.formLogin.name);
        console.log(isAuthenticated);
      }else{
      
        this.authService.removeCredentials();
        this.navCtrl.navigateRoot('/login');
       
        
      }
    } catch (err) {
      console.log(err);
   
    }
  }

}
