import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from  '../validators/age';
import { UsernameValidator } from  '../validators/username';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
@Component({
  selector: 'app-create-group-chat',
  templateUrl: './create-group-chat.page.html',
  styleUrls: ['./create-group-chat.page.scss'],
})
export class CreateGroupChatPage implements OnInit {
  @ViewChild('signupSlider') signupSlider;

	public slideOneForm: FormGroup;
	public slideTwoForm: FormGroup;
  public submitAttempt: boolean = false;

  username_all: any;
  
  constructor(
    private modalController:ModalController,
    public formBuilder: FormBuilder,
    public apidataService:ApidataService,
    public navCtrl: NavController, 
    public authService:AuthService
  ) { 


    this.slideOneForm = formBuilder.group({
      firstName: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
      lastName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      age: ['', AgeValidator.isValid]
  });

  this.slideTwoForm = formBuilder.group({
      name_group: ['', Validators.compose([Validators.required,Validators.maxLength(15)]), UsernameValidator.checkUsername],
      username: ['', Validators.required],
      
  });



  }

  ngOnInit() {
    this.apidataService.get_username_all_addroom().then(async (response: any) => {
      this.username_all = response
  console.log( this.username_all);

    }) .catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
    console.log(err)
   })




  }



  dismissModal() {
    this.modalController.dismiss();

   }

   next(){
    this.signupSlider.slideNext();
}

prev(){
    this.signupSlider.slidePrev();
}

save(){
 
   if(this.slideTwoForm.valid){
    console.log("success!")
    console.log(this.slideTwoForm.value);
    this.apidataService.save_room_chat(this.slideTwoForm.value).then(async (response: any) => {
    console.log(response);


    }).catch(async err => {
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
    console.log(err)
   })











    this.submitAttempt = false;
  }else{
    this.submitAttempt = true;
  }
 
}
}
