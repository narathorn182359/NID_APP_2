import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {
  formpassord: any = {
    password_old: '',
    password_new: '',
    password_con: '',
  
  };
  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService: ApidataService,
    private authService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
  }


  async passwordnew(data: any){
    if (data.password_new != data.password_con) {
      const alert = await this.alertController.create({
        header: 'โปรดทราบ',
        message: 'กรอกรหัสผ่านไม่ตรงกันค่ะ',
        buttons: ['ตกลง']
      });
      await alert.present();
     }else
     if (data.password_new == "" ||  data.password_con == ""  || data.password_old == "" ) {

      const alert = await this.alertController.create({
        header: 'โปรดทราบ',
        message: 'กรอกข้อมูลไม่ครบ',
        buttons: ['ตกลง']
      });
      await alert.present();
     }else{
      this.apidataService.ch_password(data)
      .then(async (response: any) => {
        console.log(response);
        if (response.success == "200" ) {
          const alert = await this.alertController.create({
            header: 'สำเร็จ',
            message: 'เปลี่ยนรหัสผ่านสำเร็จ/จำเป็นต้องเข้าระบบใหม่',
            buttons: ['ตกลง']
          });
          await alert.present();
          this.authService.removeCredentials();
     
          //this.menuCtrl.enable(false);
           setTimeout(() => {
           
             this.navCtrl.navigateRoot('/');
             window["plugins"].PushbotsPlugin.updateAlias("--");
             //this.nav.setRoot('auth');
             //window.location.reload();
           }, 750)
        }
        if (response.success == "404" ) {
          const alert = await this.alertController.create({
            header: 'เปลี่ยนไม่สำเร็จ',
            message: 'รหัสเดิมไม่ถูกต้อง',
            buttons: ['ตกลง']
          });
          await alert.present();
        }

      })
      .catch(async err => {
        console.log(err);
      })
     }
    


  }
























}
