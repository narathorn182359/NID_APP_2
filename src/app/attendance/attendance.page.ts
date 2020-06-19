import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {

  constructor(
    private modalController:ModalController,
    private router: Router,
    public navParams: NavParams,
  ) { }

  ngOnInit() {
   
   
  }

  dismissModal(  ) {

    this.modalController.dismiss();

   }

}
