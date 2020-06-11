import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ELearningPage } from '../e-learning/e-learning.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
  menulist:any;
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    private modalController:ModalController,
    private oneSignal: OneSignal,
    
    ) { 
    
    }

  ngOnInit() {
    this.checkAuthenticated();
  }


  async ionViewWillEnter(){
    

 
  }

  dismissModal() {
    this.modalController.dismiss();

   }

  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
     
        const loading = await this.loadingController.create({
          spinner: 'bubbles',
          message: null, 
        });
      /*   await loading.present(); */
        this.apidataService.getlistmenu()
        .then(async (response: any) => {
          this.menulist = response;
           console.log(response)
          /*  await loading.dismiss(); */
          
       })
       .catch(async err => {
        console.log(err)
       })






      }else{
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
      this.authService.removeCredentials();
      this.navCtrl.navigateRoot('/login');
     // window["plugins"].PushbotsPlugin.updateAlias("--");
      console.log(err)
    }
  }




change_password(){
  this.router.navigateByUrl('/change-password');
  this.modalController.dismiss();
}


  

  logout () {
    this.modalController.dismiss();
    this.oneSignal.getIds().then(identity => {
      this.apidataService.logout_key(identity.userId).then(async (response: any) => {
      this.authService.removeCredentials();
      }).catch(async err => {
        alert(err.message);

      })
  });
   

   //this.menuCtrl.enable(false);
    setTimeout(() => {
      this.navCtrl.navigateRoot('/login');
      //window["plugins"].PushbotsPlugin.updateAlias("--");
      //this.nav.setRoot('auth');
      //window.location.reload();
    }, 750)
  }

  

  async ELearningModal() {
    this.modalController.dismiss();
    const modal = await this.modalController.create({
      component: ELearningPage,
      cssClass: '',
      componentProps: { 
       
      }
    });

  
    return await modal.present();
  }







}





