import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.page.html',
  styleUrls: ['./edit-profile.page.scss'],
})
export class EditProfilePage implements OnInit {
  formProfile: any = {
    phone: '',
  
  };
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService:ApidataService,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }


  async doSubmit(data: any){
  if(data.phone == ""){
    const alert = await this.alertController.create({ header: 'ผิดพลาด',
    message:'โปรดระบุเบอร์โทร', buttons: ['OK']  });
   
    await alert.present();  
  }else{

    const loading = await this.loadingController.create({
      spinner: null,
     
      message: 'กำลังบันทึก...'
     
    });
    await loading.present();
    this.apidataService.save_profile(data)
      .then(async (response: any) => {
       console.log(response);
        const alert = await this.alertController.create({ header: 'สำเร็จ',
          message:'บันทึกสำเร็จ', buttons: ['OK']  });
          await loading.dismiss();
          await alert.present();  
     
      })
      .catch(async err => {
        
       console.log(err);
       if ( err.status == 200 ) {
        const alert = await this.alertController.create({ header: 'สำเร็จ',
        message:'บันทึกสำเร็จ', buttons: ['OK']  });
        await loading.dismiss();
        await alert.present();  


       }
         


      
      })

  }



  }



}
