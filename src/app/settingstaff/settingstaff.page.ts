import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-settingstaff',
  templateUrl: './settingstaff.page.html',
  styleUrls: ['./settingstaff.page.scss'],
})
export class SettingstaffPage implements OnInit {

  listdata:any;
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    public apidataService: ApidataService

  ) { 
this.liststaff();

  }

  ngOnInit() {
  }


  async liststaff(){
    
    const loading = await this.loadingController.create({
      spinner: 'bubbles',
      message: null, 
    });
    await loading.present();
    this.apidataService.getliststaff()
    .then(async (response: any) => {
      this.listdata = response;
       console.log(response)
       await loading.dismiss();
      
   })
   .catch(async err => {
    console.log(err)
   })  }







   

}
