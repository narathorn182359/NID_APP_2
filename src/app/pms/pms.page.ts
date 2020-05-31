import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, LoadingController, MenuController } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';
import { AuthService } from '../api/auth.service';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-pms',
  templateUrl: './pms.page.html',
  styleUrls: ['./pms.page.scss'],
})
export class PMSPage implements OnInit {
  public  datainfouser:any; 
  constructor( 
    public navCtrl: NavController, 
    private alertController: AlertController,
    private loadingController: LoadingController,
    private menuCtrl: MenuController,
    public apidataService: ApidataService,
    private authService: AuthService,
    private router: Router,
    private modalController:ModalController
    
    ) { }

  ngOnInit() {
    this.checkAuthenticated();
  }
  async ionViewWillEnter(){
 
  }
  dismissModal() {
    this.modalController.dismiss();

   }
  async checkAuthenticated ()
  {
    try {
      let isAuthenticated = await this.authService.checkIsAuthenticated();
      if ( isAuthenticated == true) {
        const loading = await this.loadingController.create({
          spinner: 'bubbles',
          message: null, 
        });
        await loading.present();
        this.apidataService.getuserInfo()
        .then(async (response: any) => {
          this.datainfouser = response;
           console.log(response)
           await loading.dismiss();
          
       })
       .catch(async err => {
        await loading.dismiss();
        console.log(err)
       })

       this.mycharts();


      }else{
        this.navCtrl.navigateRoot('');
        
      }
    } catch (err) {
      console.log(err);
   
    }
  }


  
  async detailkpi(id:any) {

console.log(id);  
this.router.navigateByUrl('/tabss/tabs/tab1/kpi-detail/'+id);

}

  async mycharts() {

    var ctx = (<any>document.getElementById('canvas-Core-Values')).getContext('2d');
    ctx.height = 500;
    var chart = new Chart(ctx, {
      // The type of chart we want to create
      type: 'radar',
 
      // The data for our dataset
      data: {
       
        labels: ["", "", "", "", "", ""],
datasets: [{
  label: "",
  backgroundColor: "rgba(200,0,0,0.2)",
  data: [65, 75, 70, 80, 60, 80]
}, {
  label: "",
  backgroundColor: "rgba(0,0,200,0.2)",
  data: [54, 65, 60, 70, 70, 75]
}]
      },
      options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        scale: {
          ticks: {
              callback: function() {return ""}
          },
          responsive: false,
  maintainAspectRatio: false
      }
    }
    });



    var ctx2 = (<any>document.getElementById('canvas-kpi')).getContext('2d');
    ctx2.height = 10;
    var chart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
          datasets: [{
              label: 'Bar Dataset',
              backgroundColor: "rgba(200,0,0,0.2)",
              data: [10, 20, 30, 40]
          }, //{
            //label: 'Line Dataset',
           //   backgroundColor: "rgba(0,0,200,0.2)",
           //   data: [50, 50, 50, 43],
  
              // Changes this dataset to become a line
          //    type: 'line'
          //}
        ],
          labels: ['January', 'February', 'March', 'April']
      },
      options: {
        legend: {
            display: false,
            labels: {
                fontColor: 'rgb(255, 99, 132)'
            }
        },
        scales: {
          xAxes: [{
              ticks: {
                  display: false
              }
          }], yAxes: [{
            ticks: {
                display: false
            }
        }]
          

      }
    }
      
  });

  var ctx = (<any>document.getElementById('canvas-Competency')).getContext('2d');
  ctx.height = 500;
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'radar',

    // The data for our dataset
    data: {
     
      labels: ["", "", ""],
datasets: [{
label: "",
backgroundColor: "rgba(200,0,0,0.2)",
data: [65, 75, 70, 80, 60, 80]
}, {
label: "",
backgroundColor: "rgba(0,0,200,0.2)",
data: [54, 65, 60, 70, 70, 75]
}]
    },
    options: {
      legend: {
          display: false,
          labels: {
              fontColor: 'rgb(255, 99, 132)'
          }
      },
      scale: {
        ticks: {
            callback: function() {return ""}
        },
        responsive: false,
maintainAspectRatio: false
    }
  }
  });

  }




  

  




















  }
















