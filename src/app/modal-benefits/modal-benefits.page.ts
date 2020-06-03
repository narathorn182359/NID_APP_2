import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { ApidataService } from '../api/apidata.service';

@Component({
  selector: 'app-modal-benefits',
  templateUrl: './modal-benefits.page.html',
  styleUrls: ['./modal-benefits.page.scss'],
})
export class ModalBenefitsPage implements OnInit {
  data: any;

  constructor(  public modalController: ModalController,
    private navParams: NavParams,
    private apidataService: ApidataService,
    ) { }
  modalTitle: string;
  modelId: string;
  ngOnInit() {
   
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
    this.apidataService.get_be(this.modelId)
    .then(async (response: any) => {
    this.data = response;
   console.log(response) 
   })



   
  }


  dismissModal() {
    this.modalController.dismiss();

   }










  }