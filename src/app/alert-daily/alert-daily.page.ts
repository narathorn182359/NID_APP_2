import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-alert-daily',
  templateUrl: './alert-daily.page.html',
  styleUrls: ['./alert-daily.page.scss'],
})
export class AlertDailyPage implements OnInit {

  constructor(
    private apidataService:ApidataService,
    private modalController:ModalController
  ) { }

  ngOnInit() {
  }

  radioChecked(value:any) {
this.apidataService.alert_daily(value).then(async (response: any) => {
 
   console.log(response)
 if(response == 'N'){
   this.modalController.dismiss();
 }
  
})
.catch(async err => {
console.log(err)
})

  
    }
}
