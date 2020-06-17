import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController,AlertController  } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from  '../validators/age';
import { UsernameValidator } from  '../validators/username';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { IonicSelectableComponent } from 'ionic-selectable';
class Port {
  public Code_Staff: string;
  public Name_Thai: string;
}

@Component({
  selector: 'app-create-group-chat',
  templateUrl: './create-group-chat.page.html',
  styleUrls: ['./create-group-chat.page.scss'],
})
export class CreateGroupChatPage implements OnInit {
  ports: Port[];
  port: Port;


  @ViewChild('signupSlider') signupSlider;

	public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;
  public submitAttempt: boolean = false;

  username_all: any;
  group_chat=[];
  constructor(
    private modalController:ModalController,
    public formBuilder: FormBuilder,
    public apidataService:ApidataService,
    public navCtrl: NavController, 
    public authService:AuthService,
    public alertController: AlertController
  ) { 
    

    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid]
  });

  this.slideTwoForm = formBuilder.group({
      name_group: ['', Validators.compose([Validators.required,Validators.maxLength(15)]), UsernameValidator.checkUsername],
     
      
  });



  }

  ngOnInit() {
    
 
    this.apidataService.get_username_all_addroom().then(async (response: any) => {
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
 
  if(this.slideTwoForm.valid && this.port){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'คำเตือน',
      message: 'ชื่อกลุ่มนี้ไม้สามารถใช้งานได้ค่ะถูกใช้งานไปแล้ว',
      buttons: ['OK']
    });
    this.apidataService.save_room_chat(this.slideTwoForm.value ,this.port).then(async (response: any) => {
      if(response == '500'){
        await alert.present();
      }else{

        this.modalController.dismiss();
      }
    }).catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    console.log(err)
   })

    this.submitAttempt = false;
  }else{
    this.submitAttempt = true;
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
