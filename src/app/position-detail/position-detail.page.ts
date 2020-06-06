import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApidataService } from '../api/apidata.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-position-detail',
  templateUrl: './position-detail.page.html',
  styleUrls: ['./position-detail.page.scss'],
})
export class PositionDetailPage implements OnInit {
  showe: any;
  position: any;
  username: any;
  data: { chat_partner: any; owner_room: any; img_s:any };

  constructor(private storage:Storage,
              private apidataService:ApidataService,
              private router:Router,) { }

  async ngOnInit() {
    this.get_contact();
  }

    async get_contact(){

      this.position  = await this.storage.get('position')
      this.apidataService.get_contact( this.position)
      .then(async (response: any) => {
          this.showe =response
         console.log(response) 
     })
     .catch(async err => {
      console.log(err)
     })   

    }

    async detail_staff(id){

      this.apidataService.getuserid().then(async (response: any) => {
        let username = response.username
        let  img = response.username+".jpg"
        this.data ={
          'chat_partner':id,
          'owner_room':username,
          'img_s' :img,
        }
      console.log(img);
     this.router.navigate(['/detail-staff',this.data]);


      })
       
    
    }
  
}
