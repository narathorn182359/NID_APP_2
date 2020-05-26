import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController ,ToastController} from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
 
  datainfouser:any;
  position:any;
  alluser =[];
  public searchControl: FormControl;
  public items: any;
  searching: any = false;

  tetst:any;
  users = [];
  page = 0;
  maximumPages = 0;
  search: any 
  alluser_no=[];
  constructor( 
    
    
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    public apidataService: ApidataService,
    private authService: AuthService,
    public toastController: ToastController,
    private router: Router,
    private storage:Storage
    
    ) { 

      this.searchControl = new FormControl();
    }

  ngOnInit() {
   this.get_positin("");
  }
  async ionViewWillEnter(){
    this.checkAuthenticated();
    this.getlis_staff("");
   
  }

  onSearchInput(){
    this.searching = true;
}

 

  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
      
        this.searchControl.valueChanges
        .pipe(debounceTime(700))
        .subscribe(search => {
          this.get_positin(search);
          this.searching = false;
        });
  




        this.apidataService.getuserInfo()
        .then(async (response: any) => {
          this.datainfouser = response;
           console.log(response) 
       })
       .catch(async err => {
        console.log(err)
       })   
        console.log(isAuthenticated);
      }else{
      
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
   
    }
  }

  async getlis_staff(search){
   
    
    this.apidataService.getalluser(this.page,search)
    .then(async (response: any) => {
      console.log(response);
      if(search == ""){
        this.alluser = [];
        this.searching = true;
        this.alluser_no =    this.alluser_no.concat(response.data);
      }else{
        this.searching = true;
        this.alluser = [];
        this.alluser_no = [];
        this.page = 0;
        this.alluser =    this.alluser.concat(response.data);
      }
      
      
      this.maximumPages =  response.last_page
      this.searching = false;
      console.log(response);
   })
   .catch(async err => {
    console.log(err)
   })

  }
 

  async loadData(event) {
    setTimeout(async () => {
      this.page++;

   console.log(this.page);
    this.getlis_staff("");
    
    if (this.page === this.maximumPages) {
     // event.target.disabled = true;
      const toast = await this.toastController.create({
        message: 'แสดงรายการทั้งหมดแล้วค่ะ.',
        duration: 2000
      });
    //  toast.present();
    }
      event.target.complete();
    }, 750)
  
  
  
  
  }





  async get_positin(value:any){
    this.searching = true;
    this.apidataService.get_positin(value)
    .then(async (response: any) => {
      this.position =  response;
      this.searching = false;
      console.log(response);
   })
   .catch(async err => {
    console.log(err)
   })
  }





  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.get_positin("");
     this.checkAuthenticated();
      event.target.complete();
    }, 2000);
  }





 

  async detail_position(id){
    this.storage.remove('position');
    this.storage.set('position',id)
    this.router.navigateByUrl('/position-detail');
  }
}
