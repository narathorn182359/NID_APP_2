import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { Router,ActivatedRoute } from '@angular/router';
import { PopoverController,NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { AddstafftochatPage } from '../addstafftochat/addstafftochat.page';
@Component({
  selector: 'app-setting-chat-group',
  templateUrl: './setting-chat-group.page.html',
  styleUrls: ['./setting-chat-group.page.scss'],
})
export class SettingChatGroupPage implements OnInit {

  constructor(
    private authService:ApidataService,
    private router:Router,
    public popover: PopoverController,
    public activated: ActivatedRoute,
    public navParams: NavParams,
    private modalController:ModalController,
    
    ) { }

  ngOnInit() {
 

  }

  async get(){
    const modal = await this.modalController.create({
      component: AddstafftochatPage,
      componentProps: { 
        idroom: this.navParams.get('idroom')
      }
    });

    return await modal.present();
  }

  exit(){
   
   
this.authService.exit_group_chat(this.navParams.data.idroom).then(async (response: any) => {
  if(response == "200"){
    this.popover.dismiss();
  
  }
// console.log(response) 
})
.catch(async err => {
console.log(err)
})   
  }


}
