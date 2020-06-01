import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController,NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-detail-staff',
  templateUrl: './detail-staff.page.html',
  styleUrls: ['./detail-staff.page.scss'],
})
export class DetailStaffPage implements OnInit {
 
  datainfouser:any;
  message = '';
  messages = [];
  currentUser = '';
  username:string;
  owner_info:any;
 
  @ViewChild('content',{read: ElementRef, static:true}) content: ElementRef;
  dataroute: {  owner_room: any; chat_partner: any; img_s:any};
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apidataService: ApidataService,
    private storage: Storage,
    private socket: Socket, 
    private toastCtrl: ToastController,
    public navCtrl: NavController, 
    private authService: AuthService,
  ) { }

  ngOnInit() {
    this.scrollToBottomOnInit_2();
    this.socket.connect();
  
    let chat_partners: any =    this.route.snapshot.paramMap.get('id')
    this.route.params.subscribe(params => {

      this.dataroute = {
        'owner_room':params['owner_room'],
        'chat_partner': params['chat_partner'],    
        'img_s' :params['img_s'],  

      }
  
      console.log(this.dataroute);

 });
    
         this.apidataService.get_chat(this.dataroute).then(async (response: any) => {
          this.messages =  response.dataall;
          this.owner_info = response.owner_info;
        //  console.log( this.messages);
          })
         .catch(async err => {
          this.authService.removeCredentials();
          this.navCtrl.navigateRoot('/login');
          window["plugins"].PushbotsPlugin.updateAlias("--");
          console.log(err);
         }) 
  
         this.scrollToBottomOnInit();
      
    let name = this.dataroute.owner_room;
    this.currentUser = name;
    
    this.socket.emit('set-name', name);
 
    this.socket.fromEvent('users-changed').subscribe(data => {
      let user = data['user'];
      if (data['event'] === 'left') {
       /*  this.showToast('ยกเลิกเชื่อมต่อ:' + user); */
      } else {
        /* this.showToast('เชื่อมต่อ: ' + user); */
      }
    });
 
    this.socket.fromEvent('message').subscribe(message => {
      this.scrollToBottomOnInit();
      this.messages.push(message);
      //console.log(this.messages);
    });
  }
 
  sendMessage() {
   
    this.socket.emit('send-message', { 
      text: this.message,
      img: this.dataroute.img_s,
      owner_room: this.dataroute.owner_room,
      chat_partner: this.dataroute.chat_partner
    });
   
 

      let save_message = {
        msg: this.messages,
        owner_room: this.dataroute.owner_room,
        chat_partner: this.dataroute.chat_partner,
        createdAt: new Date()
  
      }
      console.log(save_message.msg);
      setTimeout(() => {
       this.apidataService.save_chat(save_message).then(async (response: any) => {
        console.log(response);
        })
       .catch(async err => {
        console.log(err);
       }) 
       console.log("ok");
   }, 1000);


 
    this.message = '';
    
  }
 
  ionViewWillLeave() {
 
    this.socket.disconnect();
  
  }
 
  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: 'top',
      duration: 2000
    });
    toast.present();
  }


   async ionViewWillEnter(){

   
  }


  scrollToBottomOnInit() {
    setTimeout(() => {
      this.content.nativeElement.scrollToBottom(500);
   }, 50);
  }
  scrollToBottomOnInit_2() {
    setTimeout(() => {
      this.content.nativeElement.scrollToBottom(500);
   }, 500);
  }


}