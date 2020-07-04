import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { Socket } from "ngx-socket-io";
import {
  ToastController,
  NavController,
  NavParams,
  ModalController,
  LoadingController,
} from "@ionic/angular";
import { ActivatedRoute, Router } from "@angular/router";
import { ApidataService } from "../api/apidata.service";
import { Storage } from "@ionic/storage";
import { AuthService } from "../api/auth.service";
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: "app-chat-with-hr",
  templateUrl: "./chat-with-hr.page.html",
  styleUrls: ["./chat-with-hr.page.scss"],
})
export class ChatWithHrPage implements OnInit {
  inputData: any;
  datainfouser: any;
  message = "";
  messages = [];
  currentUser = "";
  username: string;
  owner_info_me: any;
  chat_partner: string;
  owner_room: string;
  img_s: string;
  user1: any;
  user2: any;
  croppedImagepath = "";
  img_send: any;
  img_send_name: any;
  showButton: boolean;
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };

  @ViewChild("content", { read: ElementRef, static: true }) content: ElementRef;
  dataroute: { owner_room: any; chat_partner: any; img_s: any };
 
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apidataService: ApidataService,
    private storage: Storage,
    private socket: Socket,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    private authService: AuthService,
    private navParams: NavParams,
    private modalController: ModalController,
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private loadingController: LoadingController,
    private file: File,
    private photoViewer: PhotoViewer
  ) {}

  ngOnInit() {
    this.scrollToBottomOnInit_2();
    this.socket.connect();
    this.chat_partner = this.navParams.data.chat_partner;
    this.owner_room = this.navParams.data.owner_room;
    this.img_s = this.navParams.data.img_s;

    this.dataroute = {
      owner_room: this.owner_room,
      chat_partner: this.chat_partner,
      img_s: this.img_s,
    };

    console.log(this.dataroute);
    this.apidataService
      .get_chat(this.dataroute)
      .then(async (response: any) => {
        this.messages = response.dataall;
        this.owner_info_me = response.owner_info_me;
        console.log(response);
      })
      .catch(async (err) => {
        console.log(err);
      });

    this.scrollToBottomOnInit();

    let name = this.dataroute.owner_room;
    this.currentUser = name;

    this.socket.emit("set-name", name);

    this.socket.fromEvent("users-changed").subscribe((data) => {
      let user = data["user"];
      if (data["event"] === "left") {
        /*  this.showToast('ยกเลิกเชื่อมต่อ:' + user); */
      } else {
        /* this.showToast('เชื่อมต่อ: ' + user); */
      }
    });

    this.socket.fromEvent("message").subscribe((message) => {
      this.scrollToBottomOnInit();
      let roomcode = parseInt(this.chat_partner) + parseInt(this.owner_room);
      if (roomcode == message["coderoom"]) {
        this.messages.push(message);
      }
      //console.log(this.messages);
    });
  }

  sendMessage() {
    let save_message = {
      msg: this.messages,
      owner_room: this.dataroute.owner_room,
      chat_partner: this.dataroute.chat_partner,
      img_send: this.img_send,
      img_send_name: this.img_send_name,
      createdAt: new Date(),
    };
    console.log(save_message.msg);

    setTimeout(() => {
      this.apidataService
        .save_chat(save_message)
        .then(async (response: any) => {
          //console.log(response);
        })
        .catch(async (err) => {
          console.log(err);
        });
      console.log("ok");
    }, 1000);

    this.socket.emit("send-message", {
      text: this.message,
      img: this.dataroute.img_s,
      owner_room: this.dataroute.owner_room,
      chat_partner: this.dataroute.chat_partner,
      coderoom: parseInt(this.chat_partner) + parseInt(this.owner_room),
      name_thai: this.owner_info_me,
      img_send: this.img_send,
      img_send_name: this.img_send_name,
    });

    console.log(this.owner_info_me);

    this.message = "";
  }

  ionViewWillLeave() {
    this.socket.disconnect();
  }

  async showToast(msg) {
    let toast = await this.toastCtrl.create({
      message: msg,
      position: "top",
      duration: 2000,
    });
    toast.present();
  }

  async ionViewWillEnter() {}

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

  dismissModal() {
    this.modalController.dismiss();
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
        const loading = await this.loadingController.create({
          cssClass: "my-custom-class",
          message: "กำลังอัพโหลด...",
        });
        await loading.present();
        this.apidataService
          .save_img_chat(base64)
          .then(async (response: any) => {
            this.message =
              '<img src="' +
              response.url +
              '" class="bg-img" />';
            this.img_send = "1";
            this.img_send_name = response.name_img;
            this.sendMessage();
            loading.dismiss();
          })
          .catch(async (err) => {
            alert(err.message);
            loading.dismiss();
          });
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
