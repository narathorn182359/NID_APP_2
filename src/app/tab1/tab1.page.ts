import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Platform,NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertDailyPage } from '../alert-daily/alert-daily.page';
import { AttendancePage } from '../attendance/attendance.page';
import { ChatWithHrPage } from '../chat-with-hr/chat-with-hr.page';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { PMSPage } from '../pms/pms.page';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  @ViewChild('slides',{read: ElementRef, static:true}) slides: ElementRef;
  feedlist: any;
  banner:any;
  keyplayer:any;
  sliderOpts = {
    initialSlide: 0,
    autoplay: true,
    speed: 400,
    centeredSlides: true,
   
  };
  subscribe:any;
  img_banner: any;
  playerid: any;
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private modalController:ModalController,
    private storage:Storage,
    private oneSignal: OneSignal,
  
    ) { 
  
    
    

     


    } 

  ngOnInit() {
    this.checkAuthenticated();
    this.sliderOpts
 
  

    this.oneSignal.getIds().then(identity => {
       
  this.apidataService.save_key_player(identity.userId).then(async (response: any) => {

  
   
  }).catch(async err => {
  
  
  
  })
    });




  }

  async checkAuthenticated ()
  {
    try {
     
       let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
       
        this.feednew();
        console.log(isAuthenticated);
      }else{
      
      
      } 
    } catch (err) {
      console.log(err);
      
    }
  }

  async feednew()
  {

    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: null, 
    });
    await loading.present(); 
   this.apidataService.banner()
   .then(async (response: any) => {
        
     this.banner = response.ngg_banner;
     this.feedlist = response.advertise_heade
     this.img_banner = this.banner[0].img_banner
      console.log( this.feedlist)
       await loading.dismiss(); 
     
  })
  .catch(async err => {
    await loading.dismiss(); 

   console.log(err);
   


  })


  }


   async list_new(id:any){
     
    this.router.navigateByUrl('/tabss/tabs/tab1/list-new/'+id)
   
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

  async ionViewWillEnter(){

     let user_noti;

    this.slides.nativeElement.startAutoplay();
    this.apidataService.alert_daily_c().then(async (response: any) => {
      console.log(response.success)
      user_noti =  response.username
    if(response.success == 'N'){
     
      this.presentModal();
     // window["plugins"].PushbotsPlugin.updateAlias(user_noti);
    }
     
   })
   .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
  /*   window["plugins"].PushbotsPlugin.updateAlias("--"); */
    console.log(err)
   })
  
 
  }




  async presentModal() {
  
    const modal = await this.modalController.create({
      component: AlertDailyPage,
      cssClass: 'my-custom-modal-css',
      componentProps: { 
     
      }
    });

    return await modal.present();
  }


  async chatWithHr() {
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: null, 
    });
    await loading.present();
    this.apidataService.getuserid().then(async (response: any) => {
      await loading.dismiss();
      let username = response.username
      let  img = response.username+".jpg"
      const modal = await this.modalController.create({
        component: ChatWithHrPage,
        componentProps: { 
          chat_partner:'99999',
          owner_room :username,
          img_s :img,
          }
      });
      return await modal.present();

    })
   
  
    
}


  async AttendenceModal() {
    const modal = await this.modalController.create({
      component: AttendancePage,
      cssClass: '',
      componentProps: { 
       
      }
    });
    return await modal.present();
  }



  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.checkAuthenticated();
    this.sliderOpts
      event.target.complete();
    }, 2000);
  }



  slideChanged() { 
    this.slides.nativeElement.startAutoplay();
    this.slides.nativeElement.getActiveIndex().then(index => {
      this.banner[index];
      this.img_banner =   this.banner[index].img_banner;
    });
    }

slideChanged_2(){
  this.slides.nativeElement.startAutoplay();
    }



    
}
