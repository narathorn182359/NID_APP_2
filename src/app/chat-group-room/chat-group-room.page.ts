import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController,NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../api/auth.service';
import { PopoverController } from '@ionic/angular';
import { SettingChatGroupPage } from '../setting-chat-group/setting-chat-group.page';
import { ChatPage } from '../chat/chat.page'

@Component({
  selector: 'app-chat-group-room',
  templateUrl: './chat-group-room.page.html',
  styleUrls: ['./chat-group-room.page.scss'],
})
export class ChatGroupRoomPage implements OnInit {
  datainfouser:any;
  message = '';
  messages = [];
  currentUser = '';
  username:string;
  name_room:any;
  coderoom:any;
  user1:any
  user2:any
 
  @ViewChild('content',{read: ElementRef, static:true}) content: ElementRef;
  dataroute: {  id_room:any; chat_partner: any; img_s:any ,chat_name:any};
  last_chat: any;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apidataService: ApidataService,
    private storage: Storage,
    private socket: Socket, 
    private toastCtrl: ToastController,
    public navCtrl: NavController, 
    private authService: AuthService,
    public popoverController: PopoverController
  ) { }



  async presentPopover(ev: any) {
   
    const popover = await this.popoverController.create({
      component: SettingChatGroupPage,
      cssClass: '',
      event: ev,
      translucent: true,
      componentProps: { 
        idroom: this.route.snapshot.paramMap.get('id'),
        
        }
    });

    popover.onDidDismiss().then(data=>{
     this.router.navigateByUrl('/tabss/tabs/chat');
      
    })


    return await popover.present();
  }

  ngOnInit() {
    this.scrollToBottomOnInit_2();
    this.socket.connect();
    this.apidataService.getuserid().then(async (response: any) => {

      this.dataroute = {
        'id_room': this.route.snapshot.params.id,
        'chat_partner': response.username,   
        'chat_name' :response.Name_Thai,
        'img_s' :response.username+".jpg",  
      }
         console.log(this.dataroute);
         this.currentUser =  this.dataroute.chat_partner;
         this.apidataService.get_chat_group(this.dataroute).then(async (response: any) => {
          this.messages =  response.dataall;
          this.name_room = response.name_room;
       
         console.log(response.dataall);
          })
         .catch(async err => {
         
          console.log(err);
         }) 
  
    });
  
    
         
         this.scrollToBottomOnInit();
      
    /* let name = this.dataroute.owner_room; */
 
    
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
     console.log(message)
      if(this.dataroute.id_room == message['coderoomgroup']){
        this.messages.push(message);
      }
    
     
    });
  }
 
  sendMessage() {
   
    this.socket.emit('send-message', { 
      text: this.message,
      img: this.dataroute.img_s,
      chat_partner: this.dataroute.chat_partner,
      name_thai:this.dataroute.chat_name,
      coderoomgroup:this.dataroute.id_room
    });
   
 

      let save_message = {
        msg: this.messages,
        id_room: this.dataroute.id_room,
        createdAt: new Date()
  
      }
      //console.log(save_message.msg);

      setTimeout(() => {
       this.apidataService.save_chat_group(save_message).then(async (response: any) => {
     //  console.log(response);
        })
       .catch(async err => {
        console.log(err);
       }) 
     
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
