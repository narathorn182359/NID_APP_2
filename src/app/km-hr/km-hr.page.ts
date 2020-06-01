import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';
import { ModalController,NavController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';

@Component({
  selector: 'app-km-hr',
  templateUrl: './km-hr.page.html',
  styleUrls: ['./km-hr.page.scss'],
})
export class KmHrPage implements OnInit {
  data: any;

  constructor(
    private apidataService: ApidataService,
    private router: Router,
    public navCtrl: NavController, 
    private authService: AuthService,

  ) { }

  ngOnInit() {
  }


  async ionViewWillEnter(){
    
    this.apidataService.kmhr()
    .then(async (response: any) => {
            this.data = response;
   
       console.log(response)
     
      
   })
   .catch(async err => {
    console.log(err);
    this.authService.removeCredentials();
    this.navCtrl.navigateRoot('/login');
    window["plugins"].PushbotsPlugin.updateAlias("--");
   
   })


  }



  detail_pd(id:any){
    this.router.navigateByUrl('/tabss/tabs/tab1/km-hr-list/'+id);
  }


}
