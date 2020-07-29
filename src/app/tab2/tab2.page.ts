import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController, } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Chart } from 'chart.js';
import { ModalController } from '@ionic/angular';
import { ModalBenefitsPage } from '../modal-benefits/modal-benefits.page';
import { Camera, CameraOptions } from "@ionic-native/Camera/ngx";
import { Crop } from "@ionic-native/crop/ngx";
import { File } from "@ionic-native/file/ngx";
import { ActionSheetController } from "@ionic/angular";
import { ModalNewPage } from '../modal-new/modal-new.page';
@Component({
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
})
export class Tab2Page implements OnInit {
  public  datainfouser:any; 
  segmentModel: string = "ข้อมูลส่วนตัว";
  benefits: any;
  history_chat:[];
  imagePickerOptions = {
    maximumImagesCount: 1,
    quality: 50,
  };
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    public apidataService: ApidataService,
    private authService: AuthService,
    public modalController: ModalController,
    private camera: Camera,
    private crop: Crop,
    public actionSheetController: ActionSheetController,
    private file: File,
    

    
    ) { 
     
    } 

  ngOnInit() {
    this.apidataService.get_list_benefits()
    .then(async (response: any) => {
    this.benefits = response;
 
   })

   this.checkAuthenticated();
  }
  
  doRefresh(event) {
    console.log('Begin async operation');
  
    setTimeout(() => {
      this.getuserInfo();
      this.apidataService.get_list_benefits()
      .then(async (response: any) => {
      this.benefits = response;
    
     })
  
     this.checkAuthenticated();
      event.target.complete();
    }, 2000);
  }

  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        
        this.getuserInfo();
      

      }else{
        this.authService.removeCredentials();
      this.navCtrl.navigateRoot('/login');
      }
    } catch (err) {
      this.authService.removeCredentials();
      this.navCtrl.navigateRoot('/login');
   
    }
  }

  segmentChanged(ev: any) {
    this.apidataService.get_list_benefits()
    .then(async (response: any) => {
    this.benefits = response;
 
   })
    console.log('Segment changed', ev);
   
  }



  async presentModal(id:any,head:any) {
    const modal = await this.modalController.create({
      component: ModalBenefitsPage,
      componentProps: { 
        paramID: id,
        paramTitle: head
       
      }
    });

    
    return await modal.present();
  }





  async getuserInfo(){
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: null, 
    });

    await loading.present();

    this.apidataService.getuserInfo()
    .then(async (response: any) => {
      this.datainfouser = response;
      await loading.dismiss();
      
   })
   .catch(async err => {
    await loading.dismiss();
    console.log(err)
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
   })


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
          cssClass: 'my-custom-class',
          message: 'กำลังอัพโหลด...',
        
        });
        await loading.present();
        this.apidataService
          .save_img_profile(base64)
          .then(async (response: any) => {
            alert("บันทึกสำเร็จ รอระบบอัพเดทค่ะ")
            this.getuserInfo();
            loading.dismiss();
          })
          .catch(async (err) => {
           
            loading.dismiss();
          });

     
      },
      (error) => {
        alert("Error in showing image" + error);
   
      }
    );
  }



  async presentModalKPI() {
    const modal = await this.modalController.create({
      component: ModalNewPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }







/*   async mycharts() {
      var ctx = (<any>document.getElementById('canvas-chart2')).getContext('2d');
      ctx.height = 500;
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
   
        // The data for our dataset
        data: {
         
          labels: ["", "", "", "", "", ""],
  datasets: [{
    label: "",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
        },
        options: {
          legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          scale: {
            ticks: {
                callback: function() {return ""}
            },
            responsive: false,
    maintainAspectRatio: false
        }
      }
      });
    }






    async mycharts2() {
      var ctx = (<any>document.getElementById('canvas-chart')).getContext('2d');
      ctx.height = 500;
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
   
        // The data for our dataset
        data: {
         
          labels: ["", "", "", "", "", ""],
  datasets: [{
    label: "",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
        },
        options: {
          legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          scale: {
            ticks: {
                callback: function() {return ""}
            },
            responsive: false,
    maintainAspectRatio: false
        }
      }
      });
    }



    async mycharts3() {
      var ctx = (<any>document.getElementById('canvas-chart3')).getContext('2d');
      ctx.height = 500;
      var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'radar',
   
        // The data for our dataset
        data: {
         
          labels: ["", "", "", "", "", ""],
  datasets: [{
    label: "",
    backgroundColor: "rgba(200,0,0,0.2)",
    data: [65, 75, 70, 80, 60, 80]
  }, {
    label: "",
    backgroundColor: "rgba(0,0,200,0.2)",
    data: [54, 65, 60, 70, 70, 75]
  }]
        },
        options: {
          legend: {
              display: false,
              labels: {
                  fontColor: 'rgb(255, 99, 132)'
              }
          },
          scale: {
            ticks: {
                callback: function() {return ""}
            },
            responsive: false,
    maintainAspectRatio: false
        }
      }
      });
    } */

  

  }

  




