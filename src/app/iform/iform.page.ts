import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-iform',
  templateUrl: './iform.page.html',
  styleUrls: ['./iform.page.scss'],
})

export class IformPage implements OnInit {
data:any;

  constructor(    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,) {
   // this.downloadPdf();
   }
 
  ngOnInit() {
   
  }

  
  downloadPdf(url: string, name: string) {
    const pdfUrl = 'http://18.140.109.247/nidapi/file_iform/'+url;
    const pdfName = name;
    FileSaver.saveAs(pdfUrl, pdfName);
  }
  async ionViewWillEnter(){
    this.checkAuthenticated();

  }

  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
      
     this.get_iform();
        console.log(isAuthenticated);
      }else{
      
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
    
    }
  }


  async get_iform(){
    const loading = await this.loadingController.create({
      message: 'Please wait...',
   
    });
    await loading.present();
    this.apidataService.get_iform()
    .then(async (response: any) => {
            this.data = response;
      await loading.dismiss();
       console.log(response)
     
      
   })
   .catch(async err => {
   

    console.log(err);
      this.authService.removeCredentials();
      this.navCtrl.navigateRoot('');


   })
  }


}

