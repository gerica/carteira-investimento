import { PapelService } from './../../shared/service/papel/papel.service';
import { Papel } from './../../shared/modelo/papel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'invet-acao',
  templateUrl: './acao.component.html',
  styleUrls: ['./acao.component.scss'],
  providers: [PapelService]
})
export class AcaoComponent implements OnInit {
  papeis: Papel[];

  constructor(private papelService: PapelService) { }

  ngOnInit() {
    this.getPapeis();
  }

  private getPapeis(): void {
    this.papelService.getPapeis().subscribe(
      (data: Papel[]) => {
        this.papeis = data;
      },
      error => console.log(error)
    );
  }

}
