import { Papel } from './../papel';

export class OperacaoEntrada {
    id: number;
    data: string;
    tipoOperacao: string;
    precoUnitario: number;
    quantidade: number;
    despesa: number;
    observacao: string;
    papel: Papel;
}