import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Tab3Page } from '../tab3/tab3.page';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { Service } from "../../settings/Laravel";
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  datainfouser:any; 
  p:any;
i:any;
j:any;
k:any;
l:any;
m:any;
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    private modalController: ModalController,
    private http: HttpClient,
    private storage: Storage
  ) { 

  
this.p=0;

this.i = 1;
this.j = 0;
this.k = 0;
this.l = 0;
this.m = 0;
  }

  ngOnInit() {
this.checkAuthenticated();

  }




  async ionViewWillEnter() {
  
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
    this.http
      .get(`${Service.apiUrl}/get_noti_wallet`, { headers })
      .subscribe(response => {
        this.p =response
        console.log(response);
      });
  }
 
  async rmnoti(){
    let auth: any = await this.storage.get("auth");
    let headers: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${auth.access_token}`
    });
  
    this.http
      .get(`${Service.apiUrl}/rm_noti_wallet`,{ headers })
      .subscribe(response => {
        this.p= response;
        console.log('ok');
      });
  }





  async alert_new_1()
  {
    this.i = 1;
    this.j = 0;
    this.k = 0;
    this.l = 0;
    this.m = 0;

  }

 
  async alert_chat_1()
  {

    this.i = 0;
    this.j = 1;
    this.k = 0;
    this.l = 0;
    this.m = 0;
    this.router.navigateByUrl('/tabss/tabs/chat')
  }


  async alert_user_1()
  {

    this.i = 0;
    this.j = 0;
    this.k = 1;
    this.l = 0;
    this.m = 0;
    this.router.navigateByUrl('/tabss/tabs/tab2')
  }


 async alert_time_1()
  {

    this.i = 0;
    this.j = 0;
    this.k = 0;
    this.l = 1;
    this.m = 0;

  }
 

  async alert_menu_1()
  {


    const modal = await this.modalController.create({
      component: Tab3Page,
      cssClass: 'my-custom-modal-css-2',
      componentProps: { 
     
      }
    });

    return await modal.present();
  }
 


  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        console.log(isAuthenticated);
      }else{
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
   
    }
  }
}
