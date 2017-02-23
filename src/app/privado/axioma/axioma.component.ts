import { axiomas } from './../../../data/axiomas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-axioma',
  templateUrl: './axioma.component.html',
  styleUrls: ['./axioma.component.scss']
})

export class AxiomaComponent implements OnInit {

  nodes: any = [];
  axiomas = axiomas;

  constructor() { }

  ngOnInit() {

  }

  private cargaTree(): void {
    let id = 1000;
    for (const v of axiomas) {
      this.nodes.push({
        id: v.id,
        name: v.titulo,
      });
    }

    for (let i = 0; i < this.nodes.length; i++) {
      let node = this.nodes[i];
      const axioma = axiomas.find(cur => cur.id === node.id);

      node.children = [];
      for (const v of axioma.conteudo) {
        id = id + 1;
        node.children.push({
          id: id,
          name: v
        });
      }

      if (axioma.subAxioma) {
        for (const axiomaSub of axioma.subAxioma) {
          node.children.push({
            id: axiomaSub.id,
            name: axiomaSub.titulo
          });

          let nodeChildren = node.children.find(cur => cur.id === axiomaSub.id);
          nodeChildren.children = [];
          for (const v of axiomaSub.conteudo) {
            id = id + 1;
            nodeChildren.children.push({
              id: id,
              name: v
            });
          }
        }
      }
    }
  }
}
