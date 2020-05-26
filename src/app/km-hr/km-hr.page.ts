import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';

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
    
   })


  }



  detail_pd(id:any){
    this.router.navigateByUrl('/km-hr-list/'+id);
  }


}
