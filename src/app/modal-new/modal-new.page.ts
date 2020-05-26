import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
@Component({
  selector: 'app-modal-new',
  templateUrl: './modal-new.page.html',
  styleUrls: ['./modal-new.page.scss'],
})
export class ModalNewPage implements OnInit {

  constructor(
private modalController:ModalController

  ) { }

  ngOnInit() {
  }



  dismissModal() {
    this.modalController.dismiss();

   }
}
