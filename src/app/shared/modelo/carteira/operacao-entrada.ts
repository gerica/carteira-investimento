import { Papel } from './../papel';

export class OperacaoEntrada {
    $key: string;
    data: string;
    tipoOperacao: string;
    precoUnitario: number;
    quantidade: number;
    despesa: number;
    observacao: string;
    papel: Papel;
    user_id: string;
}