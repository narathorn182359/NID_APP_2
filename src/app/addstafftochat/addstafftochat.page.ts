import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams, NavController, AlertController, PopoverController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { IonicSelectableComponent } from 'ionic-selectable';
import { Router } from '@angular/router';
class Port {
  public Code_Staff: string;
  public Name_Thai: string;
}
@Component({
  selector: 'app-addstafftochat',
  templateUrl: './addstafftochat.page.html',
  styleUrls: ['./addstafftochat.page.scss'],
})
export class AddstafftochatPage implements OnInit {
  ports: Port[];
  port: Port;

  constructor( 
    private modalController:ModalController,
    private router: Router,
    public navParams: NavParams,
    private authService: AuthService,
    private apidataService:ApidataService,
    public navCtrl: NavController, 
    public alertController: AlertController,
    public popover: PopoverController,
    ) { }

  ngOnInit() {
    this.apidataService.add_staff_ingroup(this.navParams.get('idroom')).then(async (response: any) => {
      this.ports = response
     
    
     
    }) .catch(async err => {
    
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
   
   })
   
  }


  dismissModal() {
    this.modalController.dismiss();

   }


   async save(){

    if(this.port != null){
      this.apidataService.save_staff_ingroup(this.port,this.navParams.get('idroom')).then(async (response: any) => {
     
       
        
       
        const alert = await this.alertController.create({
          header: 'สำเร็จ',
          message: 'ได้ทำการเพิ่มเข้ากลุ่มแล้วค่ะ',
          buttons: ['ตกลง']
        });
    
        await alert.present();
        this.modalController.dismiss();
          console.log(response)

  
      }) .catch(async err => {
        console.log(err)
     
     })
    }else{
      const alert = await this.alertController.create({
        header: 'ผิดพลาด',
        message: 'โปรดเลือกข้อมูลพนักงาน',
        buttons: ['ตกลง']
      });
    }
   


   }

   portChange(event: {
    component: IonicSelectableComponent,
    value: any
  }) {
     this.port =  event.value;
    console.log('port:', this.port);
  }
  

}
