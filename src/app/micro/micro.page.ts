import { Component, OnInit, Injectable } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { AuthService } from '../api/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-micro',
  templateUrl: './micro.page.html',
  styleUrls: ['./micro.page.scss'],
})
export class MicroPage implements OnInit {
  micro: any;
  mc:any;

  constructor(
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private dataService:ApidataService,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router,
  ) { }

  ngOnInit() {
  }


  async ionViewWillEnter(){
    this.checkAuthenticated();
  
  }


  async checkAuthenticated ()
  {
    try {
      
        this.dataService.micro(this.route.snapshot.paramMap.get('id')).then(async (response: any) => {
          this.micro = response;
          this.getmc(this.route.snapshot.paramMap.get('id'));
          console.log(this.micro);
       })
       .catch(async err => {
        console.log(err);
       })






    
    
    } catch (err) {
      console.log(err);
    }
  }



  async getmc(id:any)
  {
    this.dataService.micro_name(this.route.snapshot.params.id)
    .then(async (response: any) => {
      this.mc = response;
      console.log( response);
    
   })
   .catch(async err => {
    console.log(err);
   })


  }




  detail_new(id:any,id_mc:any){
   

      this.dataService.count_read(id)
      .then(async (response: any) => {
      
        console.log( response);
      
     })
     .catch(async err => {
      console.log(err);
     })
  
  
      this.router.navigateByUrl('/tabss/tabs/tab1/micro-detail/'+id);
   
    
  }

















}
