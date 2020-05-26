import { Component, OnInit } from '@angular/core';
import { ApidataService } from '../api/apidata.service';
import { DomSanitizer} from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-e-learning',
  templateUrl: './e-learning.page.html',
  styleUrls: ['./e-learning.page.scss'],
})
export class ELearningPage implements OnInit {
  datainfouser: any;
  url:any;
  constructor(
    private apidataService:ApidataService,
    private sanitizer: DomSanitizer,
    private modalController: ModalController,
  ) { }

  ngOnInit() {

    this.apidataService.getuserid()
    .then(async (response: any) => {
      this.datainfouser = response;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl('http://18.140.109.247/learning/loginuser?identity='+this.datainfouser.username+'&password='+this.datainfouser.id_card);
      console.log( this.url)
      
      
   })
   .catch(async err => {
  
    console.log(err)
   })

  }

  dismissModal() {
    this.modalController.dismiss();

   }

}
