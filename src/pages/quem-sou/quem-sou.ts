import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the QuemSouPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quem-sou',
  templateUrl: 'quem-sou.html',
})
export class QuemSouPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  infos: any = [
    {'icon':'pin', 'text':'São José dos Campos - SP'},
    {'icon':'school', 'text':'Técnico em Informática'},
    {'icon':'school', 'text':'Técnico em Programação de Jogos Digitais'},
    {'icon':'school', 'text':'Web Designer'},
    {'icon':'school', 'text':'Analista de Sistemas'},
    {'icon':'laptop', 'text':'Conhecimentos em IONIC, Angular, CSS, HTML, Typescript'},
    {'icon': 'bicycle', 'text': 'Hobbies: Academia, correr, jogos, cozinhar, viajar'}
  ];

  socials: any = [
    {'icon':'at', 'text':'ramonsoliveira1@hotmail.com', 'link': 'mailto:ramonsoliveira1@hotmail.com'},
    {'icon':'call', 'text':'(12)98227-6505', 'link': 'tel:12982276505'},
    {'icon':'logo-github', 'text':'https://github.com/ramou1', 'link': 'https://github.com/ramou1'},
    {'icon':'share', 'text':'https://www.behance.net/ramou', 'link': 'https://www.behance.net/ramou'}
  ];


  ionViewDidLoad() {
    // console.log('ionViewDidLoad QuemSouPage');
  }

}
