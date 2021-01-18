import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }


  // personals: any = [
  //   {'modalidade':'Yoga Express', 'image':'yoga.jpg'},
  //   {'modalidade':'Abdominal', 'image':'abdominal.jpg'},
  //   {'modalidade':'Emagrecimento', 'image':'emagrecimento.jpg'},
  //   {'modalidade':'Combat', 'image':'combat.jpg'}
  // ];

  // programas: any = [
  //   {'modalidade':'Levantamento de Pesos', 'image':'levantamento.jpg'},
  //   {'modalidade':'Emagrecimento', 'image':'emagrecimento.jpg'},
  //   {'modalidade':'Combat', 'image':'combat.jpg'},
  //   {'modalidade':'Yoga Express', 'image':'yoga.jpg'},
  //   {'modalidade':'Abdominal', 'image':'abdominal.jpg'}
  // ];

}
