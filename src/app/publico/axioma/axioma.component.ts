import { axiomas } from './../../../data/axiomas';
import { Axioma } from './../../shared/modelo/axioma';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-axioma',
  templateUrl: './axioma.component.html',
  styleUrls: ['./axioma.component.scss']
})
export class AxiomaComponent implements OnInit {
  axioma: Axioma;
  conteudos: string[];
  private _axiomas: Axioma[] = axiomas;
  private _index: number = 0;

  constructor() { }

  ngOnInit() {
    this.onNextAxioma();
  }

  public onNextAxioma(): void {
    if (this._axiomas.length > 0) {
      this._index = this.nextIndex(this._index);
      this.axioma = this._axiomas[this._index];
      this.setConteudo();
    } else {
      this.axioma = null;
    }
  }

  private setConteudo(): void {
    let count = 0;
    this.conteudos = [];
    for (const cont of this.axioma.conteudo) {
      count++;
      this.conteudos.push(cont);
      if (count === 2)
        break
    }
  }

  private nextIndex(valor: number): number {
    let i = Math.round(Math.random() * (this._axiomas.length - 1));
    if (i === valor) {
      return this.nextIndex(valor);
    }
    return i;

  }

}
