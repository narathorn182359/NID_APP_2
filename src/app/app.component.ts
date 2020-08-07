import { Component, OnInit, OnDestroy, AfterViewInit,QueryList, ViewChildren  } from '@angular/core';

import {NavController ,Platform, ModalController, ActionSheetController, PopoverController, IonRouterOutlet, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthService } from './api/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  backButtonSubscription; 

  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;



  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authService: AuthService,
    public navCtrl: NavController, 
    private router: Router,
    private popoverCtrl: PopoverController,
    public modalCtrl: ModalController,
    private toast: ToastController,
    private menu: MenuController,
    private actionSheetCtrl: ActionSheetController,
  ) {
    this.initializeApp();
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.statusBar.backgroundColorByName('white');
    // window["plugins"].PushbotsPlugin.initialize("5ed3e6512c9f8c1f8d3ed9c4", {"android":{"sender_id":"707863121412"}});
      this.checkAuthenticated();
      this.backButtonEvent();
   //Remove this method to stop OneSignal Debugging 
    window["plugins"].OneSignal.setLogLevel({logLevel: 6, visualLevel: 0});
    
    var notificationOpenedCallback = function(jsonData) {
      console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    };
    
    // Set your iOS Settings
    var iosSettings = {};
    iosSettings["kOSSettingsKeyAutoPrompt"] = false;
    iosSettings["kOSSettingsKeyInAppLaunchURL"] = false;
    
    window["plugins"].OneSignal
      .startInit("16adf426-0420-49fa-b189-d71af438789a")
      .handleNotificationOpened(notificationOpenedCallback)
      .iOSSettings(iosSettings)
      .inFocusDisplaying(window["plugins"].OneSignal.OSInFocusDisplayOption.Notification)
      .endInit();
    
    // The promptForPushNotificationsWithUserResponse function will show the iOS push notification prompt. We recommend removing the following code and instead using an In-App Message to prompt for notification permission (See step 6)
    window["plugins"].OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
      console.log("User accepted notifications: " + accepted);
    });
  });
    
 
  }

  async checkAuthenticated ()
  {
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
  ngOnInit() { }
 /*  ngAfterViewInit() {
   
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(666666,() => {

   

    if(this.router.url == "/tabss/tabs/tab1" || 
    this.router.url == "/tabss/tabs/tab2" || 
    this.router.url == "/tabss/tabs/tab3"){
      if(window.confirm("ยืนยันออกจาก app"))
      {
        navigator['app'].exitApp();
      }
      
    }
    else
    {
      this.navCtrl.navigateRoot('/tabss');
    }
    
   



   }); 
  } */

  ngOnDestroy() {
   /*  this.backButtonSubscription.unsubscribe(); */
  }





  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {
        // close action sheet
        try {
            const element = await this.actionSheetCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close popover
        try {
            const element = await this.popoverCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
        }

        // close modal
        try {
            const element = await this.modalCtrl.getTop();
            if (element) {
                element.dismiss();
                return;
            }
        } catch (error) {
            console.log(error);

        }

        // close side menua
        try {
            const element = await this.menu.getOpen();
            if (element) {
                this.menu.close();
                return;

            }

        } catch (error) {

        }

        this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
            if (outlet && outlet.canGoBack()) {
                outlet.pop();

            } else {

              navigator['app'].exitApp();

            }
        });
    });
}

















  
}
