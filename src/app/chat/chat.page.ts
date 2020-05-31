import { Component, OnInit, ViewChild,ElementRef } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController ,ToastController} from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { FormControl } from "@angular/forms";
import { debounceTime } from "rxjs/operators";
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { IonInfiniteScroll } from '@ionic/angular';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})

export class ChatPage implements OnInit {
@ViewChild('IonInfiniteScroll',{read: ElementRef, static:true}) infiniteScroll: ElementRef;

  segmentModel: string = "สนทนา";
  datainfouser:any;
  position:any;
  alluser =[];
  public searchControl: FormControl;
  public searchControl_history_chat: FormControl;
  public searchControl_em_chat: FormControl;
  public items: any;
  searching: any = false;
  tetst:any;
  users = [];
  search: any 
  alluser_no=[];
  history_chat= [] ;
  username: any;
  data: { chat_partner: any; owner_room: any; img_s: any; };
  username_all= [] ;
  count_em=1;
  getuserall: any;
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
      this.searchControl_history_chat = new FormControl();
      this.searchControl_em_chat = new FormControl();
    }

  ngOnInit() {
   this.get_positin("");
   this.get_history_chat("");
   this.get_username_all("");
   this.checkAuthenticated();
  
  }
  async ionViewWillEnter(){
 
    
   
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
  
        this.searchControl_history_chat.valueChanges
        .pipe(debounceTime(700))
        .subscribe(search => {
          this.get_history_chat(search);
          this.searching = false;
        });
  
        this.searchControl_em_chat.valueChanges
        .pipe(debounceTime(700))
        .subscribe(search => {
        this.get_username_all(search)
       
          this.searching = false;
        });
  





        this.apidataService.getuserInfo()
        .then(async (response: any) => {
          this.datainfouser = response;
          
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

 

/*   async getlis_staff(search){
   
    
    this.apidataService.getalluser(this.page,search)
    .then(async (response: any) => {
     
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

  } */
 

 /*  async loadData(event) {
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
  
  
  
  
  } */


  async get_positin(value:any){
    this.searching = true;
    this.apidataService.get_positin(value)
    .then(async (response: any) => {
      this.position =  response;
      this.searching = false;
      
   })
   .catch(async err => {
    console.log(err)
   })
  }





  doRefresh(event) {
   
    setTimeout(() => {
   
      this.get_positin("");
      this.checkAuthenticated();
      event.target.complete();
    }, 2000);
  }

  async detail_position(id){
    this.storage.remove('position');
    this.storage.set('position',id)
    this.router.navigateByUrl('/tabss/tabs/chat/position-detail');
  }



  segmentChanged(ev: any) {
    this.get_history_chat("");
    
  }




  async get_history_chat(value){
 
    this.history_chat = [];
    let user_id = await this.storage.get('get_username')
    this.apidataService.get_history_chat(value)
    .then(async (response: any) => {
    
      for(let data of  response) {
             if(user_id == data['owner_room']){
              const img_d = data['chat_partner']+'.jpg';
               let data_save = {
                 'img' :img_d,
                 'username':data['chat_partner'],
                 'msg':data['msg'],
                 'name_thai':data['name_thai_chat_partner']
               }
              this.history_chat.push(data_save);  
              
             }
              else if(user_id == data['chat_partner'])
             {
              const img_d = data['owner_room']+'.jpg';
              let data_save = {
                'img' :img_d,
                'username':data['owner_room'],
                'msg':data['msg'],
                'name_thai':data['name_thai_owner_room']
              }

              this.history_chat.push(data_save);  
             
             }

        console.log(this.history_chat)
      }
   })
   .catch(async err => {
    console.log(err)
   })

  }

  async  get_username_all(value){

        this.apidataService.get_username_all(value,this.count_em).then(async (response: any) => {
       this.getuserall =  response;

          if(value == ""){

           
            if(this.count_em == 1){
              this.username_all=[];
            }
            for(let data of  response.data) {
              let i = {
               'Name_Thai' :data['Name_Thai'],
               'Position' : data['Position'],
               'img':data['img']
                   }

                     this.username_all.push(i);
                  }
                
          }else
          {
            this.username_all=[];
            this.count_em = 1;
            for(let data of  response.data) {
              let i = {
               'Name_Thai' :data['Name_Thai'],
               'Position' : data['Position'],
               'img':data['img']
                   }

                     this.username_all.push(i);
                  }
                
          }
              
               console.log(response);
        })

      }

  async chat(id){
    this.username = await this.storage.get('get_username')
    let img = await this.storage.get('get_img')
    
    this.data ={
      'chat_partner':id,
      'owner_room':this.username,
      'img_s' :img,
    }

  console.log(img);
  

 this.router.navigate(['/detail-staff',this.data]);


  }


  loadData_em(event) {
  
     
      if (this.getuserall.last_page ==  this.count_em) {
        console.log('Done');
        event.target.complete();
      }else{
        this.apidataService.get_username_all("",this.count_em).then(async (response: any) => {
          if(response){
            this.get_username_all("")
            this.count_em++;
            event.target.disabled = false;
            console.log(this.count_em);
            event.target.complete();
          }
        

        })
        
      }
    }
 
  









  toggleInfiniteScroll() {
    this.infiniteScroll.nativeElement.disabled = !this.infiniteScroll.nativeElement.disabled;
  }

}
