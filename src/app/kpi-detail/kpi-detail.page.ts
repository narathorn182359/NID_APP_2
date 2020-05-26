import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Chart } from 'chart.js';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-kpi-detail',
  templateUrl: './kpi-detail.page.html',
  styleUrls: ['./kpi-detail.page.scss'],
})
export class KpiDetailPage implements OnInit {
  datainfouser:any;
  items: any;
  var_x: any;
  var_y: any;
  var_z: any;
  searching: any = false;
  targtsales: any;
  targtdaily: any;
  mydate:any;
  formSearch: any = {
    day: '',
    month: '',
    year: '',
  };

 
  constructor( 
    
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    private apidataService:ApidataService,
    private authService: AuthService,
    private route: ActivatedRoute, 
    private router: Router,
   
    ) { }

  ngOnInit() {
  
    
  }
  async ionViewWillEnter(){
    this.checkAuthenticated();
    this.onSearchInput();
  }


  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        if (this.route.snapshot.data['special']) {
          this.datainfouser = this.route.snapshot.data['special'];
         
          if(this.datainfouser.id_group == 1){
            this.chartsales();
            this.apidataService.sales_single().then(async (response: any) => {
              this.targtsales = response;
              console.log(response);
            })
            .catch(async err => {
           
             console.log(err)
            })
            this.apidataService.get_salse_sumdaily().then(async (response: any) => {
             
             this.targtdaily =  response;
            })
            .catch(async err => {
           
             console.log(err)
            })
          }
        }
      }else{
        this.navCtrl.navigateRoot('');
      }
    } catch (err) {
      console.log(err);
    }
  }

  async  showeall(){
    this.chartsales();
    this.mydate = ""
  }
async  chartsales(){
  this.apidataService.getsale_day()
  .then(async (response: any) => {
    this.searching = false;
    this.items = response;
 
    this.var_x = "ยอดขายรายวัน";
    this.var_y= this.items.map(item => item.target_degre_sell);
    this.var_z= this.items.map(item => item.day);
 
    var ctx2 = (<any>document.getElementById('canvas-kpi_detail')).getContext('2d');
    ctx2.height = 10;
    var chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
          datasets: [{
              label: this.var_x,
              backgroundColor: "rgba(200,0,0,0.2)",
              data:  this.var_y
          }, {
            label: this.var_x,
             backgroundColor: "rgba(0,0,200,0.2)",
             data: this.var_y,
  
              //Changes this dataset to become a line
            type: 'line'
          }
        ],
          labels: this.var_z
      },
      
      
  });
  
     
    
 })
 .catch(async err => {

  console.log(err)
 })

  }

  onSearchInput(){
    this.searching = true;
}



doSomething(date) {
  this.searching = true;
  this.formSearch.day = moment(date).format('D')
  this.formSearch.month = moment(date).format('MM')
  this.formSearch.year = moment(date).format('YYYY')
  console.log(this.formSearch);
  this.apidataService.get_sales_search(this.formSearch).then(async (response: any) => {    
    this.searching = false;
    console.log(response);
    this.items = response;
    this.var_x = "ยอดขายรายวัน";
    this.var_y= this.items.map(item => item.target_degre_sell);
    this.var_z= this.items.map(item => item.day);
 
    var ctx2 = (<any>document.getElementById('canvas-kpi_detail')).getContext('2d');
    ctx2.height = 10;
    var chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
          datasets: [{
              label: this.var_x,
              backgroundColor: "rgba(200,0,0,0.2)",
              data:  this.var_y
          }, {
            label: this.var_x,
             backgroundColor: "rgba(0,0,200,0.2)",
             data: this.var_y,
  
              //Changes this dataset to become a line
            type: 'line'
          }
        ],
          labels: this.var_z
      },
      
      
  });
   })
   .catch(async err => {
  
    console.log(err)
   })





  console.log('date', moment(date).format('YYYY-MM-DD')); // 2019-04-22
}





}


