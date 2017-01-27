import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { ModalContentPage } from '../log-entry/log-entry';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  constructor(public modalCtrl: ModalController) {

  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage, characterNum);
    modal.present();
  }
}
