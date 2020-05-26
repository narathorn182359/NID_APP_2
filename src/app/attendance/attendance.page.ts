import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor(
    private modalController:ModalController
  ) { }

  ngOnInit() {
  
  }

  dismissModal() {
    this.modalController.dismiss();

   }

}
