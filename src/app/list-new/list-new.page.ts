import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { ModalController,NavController } from '@ionic/angular';
import { ModalNewPage } from '../modal-new/modal-new.page';
import { AuthService } from '../api/auth.service';
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
    private modalController:ModalController,
    private authService: AuthService,
    public navCtrl: NavController, 
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
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
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
  
  
      this.router.navigateByUrl('/tabss/tabs/tab1/detail-new/'+id);
    }else{
      console.log(id_mc);
      this.router.navigateByUrl('/tabss/tabs/tab1/micro/'+id_mc);
    }
    
  }


  









  

}
