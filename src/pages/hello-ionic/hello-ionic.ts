import { Component } from '@angular/core';

import { ModalController } from 'ionic-angular';

import { Camera } from 'ionic-native';

import { ModalContentPage } from '../log-entry/log-entry';

@Component({
  selector: 'page-hello-ionic',
  templateUrl: 'hello-ionic.html'
})
export class HelloIonicPage {
  public base64Image: string;

  constructor(public modalCtrl: ModalController) {

  }

  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

}
