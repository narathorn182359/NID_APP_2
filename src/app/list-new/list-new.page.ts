import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { ModalNewPage } from '../modal-new/modal-new.page';
@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.page.html',
  styleUrls: ['./list-new.page.scss'],
})
export class ListNewPage implements OnInit {
  data: any;
  head: any;
  imglis: any;
  id: string;
  searching: any = false;
  advertise:any
  advertise_head:any
  feedlist: Promise<Object>;
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private dataService: ApidataService,
    private storage: Storage,
    private modalController:ModalController
    ) { 

    
    
  }

  ngOnInit() {

    this.searching = true;
    this.id = this.route.snapshot.paramMap.get('id');  
    this.dataService.gethead_new(this.route.snapshot.paramMap.get('id'))
    .then(async (response: any) => {
      this.advertise = response.advertise
      this.advertise_head = response.advertise_heade
      console.log(this.advertise)
   })
   .catch(async err => {
  
    console.log(err)
   })
   

   
   











  }


  async list_new_modal(id:any,id_mc:any) {
    const modal = await this.modalController.create({
      component: ModalNewPage,
      componentProps: { 
        paramID: id,
        paramID_MC: id_mc,
      }
    });
    return await modal.present();
  }

 
  detail_new(id:any,id_mc:any){
   
    if(this.route.snapshot.params.id != 8){
      this.dataService.count_read(id)
      .then(async (response: any) => {
      
        console.log( response);
      
     })
     .catch(async err => {
      console.log(err);
     })
  
  
      this.router.navigateByUrl('/detail-new/'+id);
    }else{
      console.log(id_mc);
      this.router.navigateByUrl('/tabss/tabs/micro/'+id_mc);
    }
    
  }


  









  

}
