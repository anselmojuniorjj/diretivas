import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngclass',
  templateUrl: './diretiva-ngclass.component.html',
  styleUrls: ['./diretiva-ngclass.component.css']
})
export class DiretivaNgclassComponent implements OnInit {

  meuFavorito1: boolean = false;
  meuFavorito2: boolean = false;

  altera1() {
    this.meuFavorito1 = !this.meuFavorito1;
  }

  altera2() {
    this.meuFavorito2 = !this.meuFavorito2;
  }

  constructor() { }

  ngOnInit() {
  }

}
