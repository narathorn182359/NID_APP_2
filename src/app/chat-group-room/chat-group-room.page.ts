import { Component, OnInit,ViewChild ,ElementRef} from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { ToastController,NavController,LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { AuthService } from '../api/auth.service';
import { PopoverController } from '@ionic/angular';
import { SettingChatGroupPage } from '../setting-chat-group/setting-chat-group.page';
import { ChatPage } from '../chat/chat.page'
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
declare var require: any
const FileSaver = require('file-saver');

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
  img_send: any;
  img_send_name: any;
 
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
    public popoverController: PopoverController,
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File,
    public loadingController: LoadingController,
    private photoViewer: PhotoViewer,
    public alertController: AlertController
  
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
 
  async sendMessage() {

    if (this.currentUser != "") {
      this.socket.emit('send-message', { 
        text: this.message,
        img: this.dataroute.img_s,
        chat_partner: this.dataroute.chat_partner,
        name_thai:this.dataroute.chat_name,
        coderoomgroup:this.dataroute.id_room,
        img_send: this.img_send,
        img_send_name: this.img_send_name,
      });
     
   
  
        let save_message = {
          msg: this.messages,
          id_room: this.dataroute.id_room,
          img_send: this.img_send,
          img_send_name: this.img_send_name,
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

    }else{
      const alert = await this.alertController.create({
        cssClass: "my-custom-class",
        header: "เรียนผู้ใช้าน",
        subHeader: "เกินเวลาที่กำหนด",
        message: "กรุณาออกจากห้องแชทและเข้าใหม่ค่ะ",
        buttons: ["ตกลง"],
      });

      await alert.present();


    }
   
  
    
  }
 
  ionViewWillLeave() {
 
    //this.socket.disconnect();
  
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


  pickImage(sourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };
    this.camera.getPicture(options).then(
      (imageData) => {
        // imageData is either a base64 encoded string or a file URI
        // If it's base64 (DATA_URL):
        // let base64Image = 'data:image/jpeg;base64,' + imageData;
        this.cropImage(imageData);
      },
      (err) => {
        // Handle error
      }
    );
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "เลือกรูปภาพ",
      buttons: [
        {
          text: "รูปภายในเครื่อง",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.PHOTOLIBRARY);
          },
        },
        {
          text: "ใช้กล้องถ่าย",
          handler: () => {
            this.pickImage(this.camera.PictureSourceType.CAMERA);
          },
        },
        {
          text: "ยกเลิก",
          role: "ยกเลิก",
        },
      ],
    });
    await actionSheet.present();
  }

  cropImage(fileUrl) {
    this.crop.crop(fileUrl, { quality: 50 }).then(
      (newPath) => {
        this.showCroppedImage(newPath.split("?")[0]);
      },
      (error) => {
        alert("Error cropping image" + error);
      }
    );
  }

  showCroppedImage(ImagePath) {
 
    var copyPath = ImagePath;
    var splitPath = copyPath.split("/");
    var imageName = splitPath[splitPath.length - 1];
    var filePath = ImagePath.split(imageName)[0];

    this.file.readAsDataURL(filePath, imageName).then(
      async (base64) => {

        if (this.currentUser != "") {


          const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'กำลังอัพโหลด...',
          
          });
          await loading.present();
          this.apidataService
            .save_img_chat(base64)
            .then(async (response: any) => {
              this.message = '<img src="' + response.url + '" class="bg-img" />';
              this.img_send = "1";
              this.img_send_name = response.name_img;
              this.sendMessage();
              loading.dismiss();
            })
            .catch(async (err) => {
              
               loading.dismiss();
            });



        }else{
          const alert = await this.alertController.create({
            cssClass: "my-custom-class",
            header: "เรียนผู้ใช้าน",
            subHeader: "เกินเวลาที่กำหนด",
            message: "กรุณาออกจากห้องแชทและเข้าใหม่ค่ะ",
            buttons: ["ตกลง"],
          });
    
          await alert.present();
        }




        
      },
      (error) => {
        alert("Error in showing image" + error);
        
      }
    );
  }
  imgPreview(value) {
    this.photoViewer.show('https://111loves.com/imgchat/'+value);
  }

  downloadimg(value: string) {
    const pdfUrl = 'https://111loves.com/imgchat/'+value;
    const pdfName = value;
   // alert(FileSaver.saveAs(pdfUrl, pdfName));
    FileSaver.saveAs(pdfUrl, pdfName).then((entry) => {
    alert('download complete: ' + entry.toURL());
    }, (error) => {
      alert(error);
      
    });
  }

}
