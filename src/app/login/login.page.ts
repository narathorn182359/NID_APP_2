import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  segment: string = "login";
  loading: any;
  formLogin: any = {
    name: '',
    password: '',
  };
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private authService: AuthService,
    private storage: Storage
    
    ) { 
    }

  ngOnInit() {
   
  }
  async ionViewWillEnter(){
    this.checkAuthenticated();

  }
  ionViewDidEnter() {
    console.log("nnn");
    const preloadArea: HTMLElement = document.getElementById('preload');
    preloadArea.appendChild(document.createElement('ion-title'));
    preloadArea.appendChild(document.createElement('ion-list'));
    preloadArea.appendChild(document.createElement('ion-item'));
    preloadArea.appendChild(document.createElement('ion-thumbnail'));
    preloadArea.appendChild(document.createElement('ion-card-content'));
    preloadArea.appendChild(document.createElement('ion-back-button'));
  }


  async doLogin (data: any)
  {
    const loading = await this.loadingController.create({
      spinner: null,
     
      message: 'กำลังเข้าระบบ...'
     
    });
    await loading.present();
    this.authService.login(data)
      .then(async (response: any) => {
        this.authService.storeCredentials(response);
         setTimeout(() => { 
          this.checkAuthenticated()
           loading.dismiss();
         }, 5);
      })
      .catch(async err => {
        
        if ( err.status == 400 ) {
          const alert = await this.alertController.create({ header: 'ผิดพลาด',
        message:'ไม่พบข้อมูลโปรดลองอีกครั้ง', buttons: ['OK']  });
        await loading.dismiss();
        await alert.present();
        }else if (err.status == 401) {
          const alert = await this.alertController.create({ header: 'ผิดพลาด',
          message:`${err.error.message}`, buttons: ['OK']  });
          await loading.dismiss();
          await alert.present();
        } else {
          const alert = await this.alertController.create({ header: 'ผิดพลาด',
          message:'ไม่สามารถติดต่อฐานข้อมูลได้', buttons: ['OK']  });
          await loading.dismiss();
          await alert.present();  
        } 


      
      })
  }

  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
       // this.storage.set('set_noti',"null");
        this.storage.set('get_username',this.formLogin.name);
        this.storage.set('get_img',this.formLogin.name+".jpg");
        console.log(isAuthenticated);
        this.navCtrl.navigateRoot('/tabss');
        window["plugins"].PushbotsPlugin.setAlias(this.formLogin.name)
      }else{
      
        this.navCtrl.navigateRoot('');
      }
    } 
    catch (err) {
      console.log(err);
   
    }
  }

}
