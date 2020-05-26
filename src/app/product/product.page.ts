import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApidataService } from '../api/apidata.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {
  data: any;
  id: string;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private apidataService: ApidataService,
    private storage: Storage

  ) { }

  ngOnInit() {
  }
  async ionViewWillEnter(){


    this.id = this.route.snapshot.paramMap.get('id');  
    this.apidataService.getProduct(this.id).then(async (response: any) => {
    this.data  = response;
    console.log(this.data);
  })
   .catch(async err => {
    console.log(err);
   })


   
  }


  detail_pd(id:any){
    this.router.navigateByUrl('/product-list/'+id);
  }






}
