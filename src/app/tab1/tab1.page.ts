import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { Platform,NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertDailyPage } from '../alert-daily/alert-daily.page';
import { AttendancePage } from '../attendance/attendance.page';
import { PMSPage } from '../pms/pms.page';


@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  @ViewChild('slides',{read: ElementRef, static:true}) slides: ElementRef;
  feedlist: any;
  banner:any;
  sliderOpts = {
    initialSlide: 0,
    autoplay: true,
    speed: 400,
    centeredSlides: true,
   
  };
  subscribe:any;
  img_banner: any;
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    private platform: Platform,
    private modalController:ModalController
  
    ) { 
  
    
    

     


    } 

  ngOnInit() {
    this.checkAuthenticated();
    this.sliderOpts
  }

  async checkAuthenticated ()
  {
    try {
     
       let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
       
        this.feednew();
        console.log(isAuthenticated);
      }else{
      
        this.navCtrl.navigateRoot('');
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
     this.img_banner = this.banner[0].img
      console.log( this.feedlist)
       await loading.dismiss(); 
     
  })
  .catch(async err => {
    await loading.dismiss(); 

   console.log(err);
   


  })


  }


   async list_new(id:any){
     
    this.router.navigateByUrl('/tabss/tabs/list-new/'+id)
   
  }


  async ionViewWillEnter(){
    this.slides.nativeElement.startAutoplay();
    this.apidataService.alert_daily_c().then(async (response: any) => {
      
      console.log(response)
    if(response == 'N'){
      this.presentModal();
    }
     
   })
   .catch(async err => {
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
      this.img_banner =   this.banner[index].img;
    });
    }

slideChanged_2(){
  this.slides.nativeElement.startAutoplay();
    }



    
}
